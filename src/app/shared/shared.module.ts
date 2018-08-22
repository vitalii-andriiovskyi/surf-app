import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarCollapseDirective } from './navbar-collapse.directive';
import { CurrentHeightDirective } from './currentHeight.directive';
import { FacebookModule } from 'ngx-facebook';

import { HandleLinkDirective } from './handle-link.directive';
import { AddContentDirective } from './add-content.directive';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    FacebookModule
  ],
  declarations: [
    NavbarCollapseDirective,
    CurrentHeightDirective,
    HandleLinkDirective,
    AddContentDirective
  ],
  exports: [
    CommonModule,
    NgbModule,
    FacebookModule,
    CurrentHeightDirective,
    NavbarCollapseDirective,
    HandleLinkDirective,
    AddContentDirective
  ]
})
export class SharedModule { }
