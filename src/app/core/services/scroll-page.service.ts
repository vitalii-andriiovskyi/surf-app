import { Injectable } from '@angular/core';
import { defer, animationFrameScheduler, interval } from 'rxjs';
import { map, takeWhile } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ScrollPageService {

  constructor() { }

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
