import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';

import { SurfHomeComponent } from './surf-home.component';



const surfHomeRoutes: Routes = [
  { path: 'surfhome', redirectTo: '', pathMatch: 'full' },
  { path: '', component: SurfHomeComponent },
  // { path: 'superhero/:id', component: HeroDetailComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(
      surfHomeRoutes
    )
  ],
  exports: [
    RouterModule
  ]
})
export class SurfHomeRoutingModule { }
