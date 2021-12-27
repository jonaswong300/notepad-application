import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AddFileDialogComponent } from '../component/dialogs/add-file/add-file-dialog.component';
import { FileParams } from '../models/fileParam';

@Component({
  selector: 'app-notepad',
  templateUrl: './notepad.component.html',
  styleUrls: ['./notepad.component.scss']
})
export class NotepadComponent implements OnInit {
  selected = new FormControl(0);
  tabs: string[] = []
  text: string = '';
  errorMessage: string | undefined;

  constructor(private dialog: MatDialog) {
  }

  ngOnInit(): void {
  }

  openDialog(action: string, index?: number): void {
    const params: FileParams = {
      fileName: action === 'Update' ? this.tabs[index!] : '',
      index: index ? index : 0,
      action: action, 
    }

    if(!this.checkForError(action)){
      const dialogRef = this.dialog.open(AddFileDialogComponent, {
        width: '250px',
        data: params
      });
  
      dialogRef.afterClosed().subscribe((data) => {
        if(data) {
          if(data.action === 'Add') {
            this.tabs.push(data.fileName);
          }
          else if(data.action === 'Update' && data.index >= 0) {
            this.tabs[data.index] = data.fileName;
          }
        }
      });
    }
  }

  deleteTab(index: number): void {
    if(!this.checkForError('Delete')){
      this.tabs.splice(index, 1);
    }
  }

  saveTextToFile(index: number): void {
    if(!this.checkForError('Save')){
      const file = new Blob([this.text], {type: 'text/plain'});

      let url = window.URL.createObjectURL(file);
      
      let a = document.createElement('a');
      document.body.appendChild(a);
  
      a.setAttribute('style', 'display: none');
      a.href = url;
      a.download = `${this.tabs[index]}.txt`
      a.click();
      window.URL.revokeObjectURL(url);
      a.remove();
    }
  }

  private checkForError(action: string): boolean {
    this.errorMessage = undefined;

    if(action === 'Add')
      return false;

    if(this.tabs.length === 0){
      switch(action){
        case 'Update': 
          this.errorMessage = 'Error. Cannot perform update when it is empty. Please add one first.'
          return true;
        case 'Delete':
          this.errorMessage = 'Error. Cannot perform delete when it is empty. Please add one first.'
          return true;
        case 'Save': 
          this.errorMessage = 'Error. Cannot perform save when it is empty. Please add one first.'
          return true;
        default:
          this.errorMessage = 'Unexpected Error Occurred.'
          return true;
      }
    }

    return false;
  }
}
