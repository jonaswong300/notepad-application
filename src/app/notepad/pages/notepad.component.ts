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

  tabs = ["first"]
  selected = new FormControl(0);
  fileName: string | undefined;
  text = new FormControl('');

  constructor(private dialog: MatDialog) {
  }

  ngOnInit(): void {
  }

  addFileName(): void {
    const dialogRef = this.dialog.open(AddFileDialogComponent, {
      width: '250px',
      data: this.fileName,
    });

    dialogRef.afterClosed().subscribe((x) => {
      console.info(`Dialog was closed, data = ${JSON.stringify(x)}`);
      this.fileName = x;
      if(this.fileName){
        this.tabs.push(this.fileName);
      }
    })
  }

  addTab(): void {
    this.tabs.push('new');
  }

  deleteTab(index: number): void {
    this.tabs.splice(index, 1);
  }
}
