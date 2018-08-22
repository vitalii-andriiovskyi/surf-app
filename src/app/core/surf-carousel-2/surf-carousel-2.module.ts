import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SurfCarousel2Component, CarouselSlideDirective } from './surf-carousel-2.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ SurfCarousel2Component, CarouselSlideDirective ],
  exports: [ SurfCarousel2Component, CarouselSlideDirective ]
})
export class SurfCarousel2Module { }
