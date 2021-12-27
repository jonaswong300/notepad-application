import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FileParams } from 'src/app/notepad/models/fileParam';

@Component({
  selector: 'add-file-dialog',
  templateUrl: 'add-file-dialog.component.html',
  styleUrls: ['./add-file-dialog.component.scss']
})
export class AddFileDialogComponent {
  fileName: string = '';

  constructor(
    private dialogRef: MatDialogRef<AddFileDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: FileParams) {}

  cancel(): void {
    this.dialogRef.close();
  }

  emitFileName(): void {
    this.dialogRef.close({fileName: this.fileName, index: this.data.index, action: this.data.action});
  }
}
