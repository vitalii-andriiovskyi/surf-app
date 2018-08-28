import { Directive, ElementRef, OnInit, NgZone, OnDestroy } from '@angular/core';
import { tap, filter, switchMap } from 'rxjs/operators';
import { Router, NavigationEnd } from '@angular/router';
import { ScrollPageService } from '../services/scroll-page.service';
import { of, Subscription } from 'rxjs';
import { ScrollModel } from '../models/scroll.model';

@Directive({
  selector: '[surfScroll]'
})
export class ScrollDirective implements OnInit, OnDestroy {

  startScrollTop: number;
  defaultDuration = 1000;
  scrollData: ScrollModel;
  scrollSubscription: Subscription;

  constructor(private el: ElementRef,
              private zone: NgZone,
              private router: Router,
              private scrollPageService: ScrollPageService) { }

  ngOnInit() {
    // runOutsideAngular don't work with animationFrameScheduler
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

    this.scrollSubscription = this.getNewScrollTop().subscribe(
      data => {
        if (!data.duration) { data.duration = this.defaultDuration; }
        this.scrollPage(data.newScrollTop, this.el.nativeElement.scrollTop, this.setScrollTop, data.duration);
      }
    );
  }

  ngOnDestroy() {
    this.scrollSubscription.unsubscribe();
  }

  scrollPage(newScroll: number, currentScroll: number, func: any, duration: number = this.defaultDuration) {
    this.scrollPageService.scrollPage(newScroll, currentScroll, func, duration);
  }

  setScrollTop = (frame) => {
    this.el.nativeElement.scrollTop = frame;
  }

  getNewScrollTop() {
    return this.scrollPageService.getNewScrollTop();
  }

}
