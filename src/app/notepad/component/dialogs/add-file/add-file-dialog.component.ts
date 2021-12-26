import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'add-file-dialog',
  templateUrl: 'add-file-dialog.component.html',
})
export class AddFileDialogComponent {
  fileName: string = '';

  constructor(public dialogRef: MatDialogRef<AddFileDialogComponent>) {}

  cancel(): void {
    this.dialogRef.close();
  }

  emitFileName(): void {
    this.dialogRef.close(this.fileName);
  }
}
