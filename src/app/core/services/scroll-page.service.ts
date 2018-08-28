import { Injectable } from '@angular/core';
import { defer, animationFrameScheduler, interval, Subject } from 'rxjs';
import { map, takeWhile } from 'rxjs/operators';
import { ScrollModel } from '../models/scroll.model';

@Injectable({
  providedIn: 'root'
})
export class ScrollPageService {
  private _initScrollTo$ = new Subject<ScrollModel>();

  constructor() { }

  getNewScrollTop() {
    return this._initScrollTo$.asObservable();
  }

  passNewScrollTop(newScroll: ScrollModel) {
    this._initScrollTo$.next(newScroll);
  }

  msElapsed(sceduler = animationFrameScheduler) {
    return defer(() => {
      const start = sceduler.now();

      return interval(0, animationFrameScheduler).pipe(
        map(() => sceduler.now() - start)
      );
    });
  }

  duration(ms, sceduler = animationFrameScheduler) {
    return this.msElapsed(sceduler).pipe(
      map(ems => ems / ms),
      takeWhile(t => t <= 1)
    );
  }

  distance(newScroll: number, currentScroll: number): (t: number) => number {
    if (newScroll < 0 ) { newScroll = 0; }
    const d = newScroll - currentScroll;
    return (t: number) => t * d + currentScroll;
  }

  scrollPage(newScroll: number, currentScroll: number, func: any, duration: number) {
    this.duration(duration).pipe(
      map(this.distance(newScroll, currentScroll))
    ).subscribe(
      func
    );
  }
}
