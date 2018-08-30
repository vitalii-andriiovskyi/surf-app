import { Directive, NgZone, ElementRef, Renderer2 } from '@angular/core';

import { PassScrollingDataService } from '../pass-scrolling-data.service';

// this directive attaches scroll event to .main-surf-wrapper (I set height of <html> and <body> as 100%
// and made wrapper be scrollable ) outside AngularZone and pass data (object UIEvent) using Observable
// it helps to minimize Change Detection calls and fasten app during scrolling
@Directive({
  selector: '[surfCatchScrollOuterzone]'
})
export class CatchScrollOuterzoneDirective {

  element: HTMLElement;

  constructor(private zone: NgZone,
              private el: ElementRef,
              private renderer: Renderer2,
              private passScrollDataService: PassScrollingDataService) {

    this.zone.runOutsideAngular(() => {
      this.renderer.listen(el.nativeElement, 'scroll', (event) => {
        this.passScrollDataService.passData(event);
      });

    });
  }




}
