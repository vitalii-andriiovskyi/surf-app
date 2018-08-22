import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';

import { SurfFooterComponent } from './surf-footer.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule
  ],
  declarations: [SurfFooterComponent],
  exports: [
    SharedModule,
    SurfFooterComponent
  ]
})
export class SurfFooterModule { }
