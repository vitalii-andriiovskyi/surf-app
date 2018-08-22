import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CurrentHeightDirective } from './currentHeight.directive';
import { CarouselSlideDirective } from './surf-carousel.component';
import { SurfCarouselComponent } from './surf-carousel.component';
import { MakeNavStickyDirective } from './make-nav-sticky.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SurfCarouselComponent,
    CurrentHeightDirective,
    CarouselSlideDirective,
    MakeNavStickyDirective,
  ],
  exports: [
    SurfCarouselComponent,
    CurrentHeightDirective,
    CarouselSlideDirective,
    MakeNavStickyDirective
  ]
})
export class SurfCarouselModule { }
