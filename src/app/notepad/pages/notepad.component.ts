import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AddFileDialogComponent } from '../component/dialogs/add-file/add-file-dialog.component';

@Component({
  selector: 'app-notepad',
  templateUrl: './notepad.component.html',
  styleUrls: ['./notepad.component.scss']
})
export class NotepadComponent implements OnInit {

  tabs = ["first"]
  selected = new FormControl(0);
  text: string = '';

  constructor(private dialog: MatDialog, public builder: FormBuilder) {
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
}
