import { Injectable } from '@angular/core';
import { defer, animationFrameScheduler, interval } from 'rxjs';
import { map, takeWhile, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AnimationFrameService {

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

  distance(newValue: number, currentValue: number): (t: number) => number {
    if (newValue < 0 ) { newValue = 0; }
    const d = newValue - currentValue;
    return (t: number) => t * d + currentValue;
  }

  animate(newValue: number, currentValue: number, func: any, duration: number, easeFunc = this.linear) {
    this.duration(duration).pipe(
      map(easeFunc),
      map(this.distance(newValue, currentValue)),
      tap(func)
    ).subscribe();
  }

  linear(timeFraction: number): number {
    return timeFraction;
  }
}
