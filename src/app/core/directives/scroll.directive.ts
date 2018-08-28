import { Directive, ElementRef, OnInit, NgZone } from '@angular/core';
import { tap, filter, switchMap } from 'rxjs/operators';
import { Router, NavigationEnd } from '@angular/router';
import { ScrollPageService } from '../services/scroll-page.service';
import { of } from 'rxjs';

@Directive({
  selector: '[surfScroll]'
})
export class ScrollDirective implements OnInit {

  startScrollTop: number;

  constructor(private el: ElementRef,
              private zone: NgZone,
              private router: Router,
              private scrollPageService: ScrollPageService) { }

  ngOnInit() {
    this.zone.runOutsideAngular(() => {

      this.router.events.pipe(
        filter(event => event instanceof NavigationEnd),
        switchMap(() => {
          const currentScroll = this.el.nativeElement.scrollTop ? this.el.nativeElement.scrollTop : 0;
          return of(currentScroll);
        }),
        tap(() => this.startScrollTop = this.el.nativeElement.scrollTop ? this.el.nativeElement.scrollTop : 0),
        // tap((url) => console.log(url instanceof  NavigationEnd))
      ).subscribe(
        (curScroll) => {
          this.scrollPage(0, curScroll, this.setScrollTop);
        }
      );

    });
  }

  scrollPage(newScroll: number, currentScroll: number, func: any) {
    this.scrollPageService.scrollPage(newScroll, currentScroll, func);
  }

  setScrollTop = (frame) => {
    this.el.nativeElement.scrollTop = frame;
  }

}
