import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DirectorsListComponent } from './directors-list/directors-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'directors', pathMatch: 'full' },
  { path: 'directors', component: DirectorsListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
