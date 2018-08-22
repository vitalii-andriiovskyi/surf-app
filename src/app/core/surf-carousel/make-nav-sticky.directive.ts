import { Directive,
         NgZone,
         ElementRef,
         Renderer2,
         OnInit,
         OnDestroy,
         Input,
         Output,
         EventEmitter } from '@angular/core';
import { PassScrollingDataService } from '../pass-scrolling-data.service';
import { Subscription } from 'rxjs';

import { NavPositionState } from './surf-carousel.component';

// this directive is subscribed to scroll event, which is running outside AngularZone and is attached by directive
// CatchScrollOuterzoneDirective to .main-surf-wrapper (I set height html, body as 100% and made wrapper be scrollable )
// this directive does all checking by srolling outside AngularZone and emits event changeNavPositionState at nessery
// moment inside AngularZone in order to activate Change Detection
// all of this is using in order to escape using object Window and fasten app
@Directive({
  selector: '[surfMakeNavSticky]'
})
export class MakeNavStickyDirective implements OnInit, OnDestroy {

  parentElement: HTMLElement;
  subscription: Subscription;

  @Input('surfMakeNavSticky') navPositionState: NavPositionState;
  // event helps add/remove classes .surf-carousel-nav-fixed/.surf-carousel-nav-bottomed (attached in surf-carousel.component.html)
  // by updating ts class navPositionState
  @Output() changeNavPositionState = new EventEmitter();

  constructor(private zone: NgZone,
              private el: ElementRef,
              private renderer: Renderer2,
              private passScrollDataService: PassScrollingDataService ) {

    this.parentElement = el.nativeElement.parentNode;

  }

  ngOnInit() {
    this.zone.runOutsideAngular(() => {

      this.subscription = this.passScrollDataService.passerData.subscribe((data) => {
        this.makeNavSticky(data.target);
      });
    });

  }

  ngOnDestroy() {
    this.zone.runOutsideAngular(() => {

      this.subscription.unsubscribe();
    });
  }

  makeNavSticky(fakedBody) {
    // changing value of property "offset" must be done with according changing of ccs-prop top of
    // .boards-nav in surf-carousel.component.css
    // otherwise there will be sudden jumps of arrow-navigation
    const offset = 10;
    const navHeight = this.el.nativeElement.offsetHeight;
    const navCoords = this.passScrollDataService.getCoords(this.el.nativeElement, fakedBody);

    const carouselHeight = this.parentElement.offsetHeight;
    const carouselCoords = this.passScrollDataService.getCoords(this.parentElement, fakedBody);

    // if we are in the carousel
    if ( carouselCoords.top < fakedBody.scrollTop && carouselCoords.top + carouselHeight - navHeight - 2 * offset >= fakedBody.scrollTop) {
      if (this.navPositionState.fixed) {
        return;
      }

      this.navPositionState.fixed = true;
      this.navPositionState.bottomed = false;
      // this.zone.run(() => this.changeNavPositionState.emit(this.navPositionState));

      this.renderer.setStyle(this.el.nativeElement, 'left', navCoords.left + 'px');
      // this.renderer.setStyle(this.el.nativeElement, 'position', 'fixed');
      // this.renderer.setStyle(this.el.nativeElement, 'top', offset + 'px');
      // this.renderer.setStyle(this.el.nativeElement, 'bottom', '');

    // if we are below the carousel
    } else if (carouselCoords.top + carouselHeight - navHeight - 2 * offset <= fakedBody.scrollTop ) {

      if (this.navPositionState.bottomed) {
        return;
      }

      this.navPositionState.fixed = false;
      this.navPositionState.bottomed = true;
      // this.zone.run(() => this.changeNavPositionState.emit(this.navPositionState));

      // this.renderer.setStyle(this.el.nativeElement, 'position', 'absolute');
      // this.renderer.setStyle(this.el.nativeElement, 'top', 'auto');
      // this.renderer.setStyle(this.el.nativeElement, 'bottom', offset + 'px');
      this.renderer.setStyle(this.el.nativeElement, 'left', '');

     // if we are above the carousel
    } else if ( carouselCoords.top > fakedBody.scrollTop) {
      if (!this.navPositionState.bottomed && !this.navPositionState.fixed) {
        return;
      }

      this.navPositionState.fixed = false;
      this.navPositionState.bottomed = false;

      // this.renderer.setStyle(this.el.nativeElement, 'position', 'absolute');
      // this.renderer.setStyle(this.el.nativeElement, 'top', '');
      this.renderer.setStyle(this.el.nativeElement, 'left', '');
    }
      this.zone.run(() => this.changeNavPositionState.emit(this.navPositionState));
  }

}
