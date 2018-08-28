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

}
