import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddFileDialogComponent } from './component/dialogs/add-file/add-file-dialog.component';
import { NotePadRoutingModule } from './notepad-routing.module';
import { NotepadComponent } from './pages/notepad.component';

@NgModule({
  declarations: [
    NotepadComponent,
    AddFileDialogComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    NotePadRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatFormFieldModule,
    MatDialogModule,
    MatInputModule, 
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
  ],
  providers: [
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class NotepadModule { }
