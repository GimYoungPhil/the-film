import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DirectorsListComponent } from './directors-list/directors-list.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: '', redirectTo: 'directors', pathMatch: 'full' },
  { path: 'directors', component: DirectorsListComponent },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
