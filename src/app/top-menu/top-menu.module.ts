import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';

import { TopMenuComponent } from './top-menu.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule
  ],
  declarations: [ TopMenuComponent ],
  exports: [ TopMenuComponent ]
})
export class TopMenuModule { }
