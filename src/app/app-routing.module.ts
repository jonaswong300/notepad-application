import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotepadComponent } from './notepad/pages/notepad.component';

const routes: Routes = [
  {
    path: 'notepad',
    component: NotepadComponent,
  },
  {
    path: 'notepad',
    loadChildren: () => import('./notepad/notepad.module').then((m) => m.NotepadModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
