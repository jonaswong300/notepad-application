import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AddFileDialogComponent } from '../component/dialogs/add-file/add-file-dialog.component';

@Component({
  selector: 'app-notepad',
  templateUrl: './notepad.component.html',
  styleUrls: ['./notepad.component.scss']
})
export class NotepadComponent implements OnInit {

  tabs: string[] = []
  selected = new FormControl(0);
  text: string = '';

  constructor(private dialog: MatDialog) {
  }

  ngOnInit(): void {
  }

  addNameToTab(): void {
    const dialogRef = this.dialog.open(AddFileDialogComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe((fileName) => {
      if(fileName){
        this.tabs.push(fileName);
      }
    })
  }

  deleteTab(index: number): void {
    this.tabs.splice(index, 1);
  }

  saveTextToFile(index: number): void {
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

  updateFileName(index: number): void{
    //https://www.freakyjolly.com/angular-material-table-operations-using-dialog/
  }
}
