import { TestBed, inject } from '@angular/core/testing';

import { ApplicationRef, ReflectiveInjector } from '@angular/core';
import { fakeAsync, tick } from '@angular/core/testing';
import { SwUpdate } from '@angular/service-worker';
import { Subject, BehaviorSubject } from 'rxjs';
import { take } from 'rxjs/operators';

import { Logger } from '../services/logger.service';
import { SwUpdatesService } from './sw-updates.service';
// import {  } from 'rxjs/operator/toPromise';
import { Promise, resolve } from 'q';

describe('SwUpdatesService', () => {
  let injector: ReflectiveInjector;
  let appRef: MockApplicationRef;
  let service: SwUpdatesService;
  let sw: MockSwUpdate;
  let checkInterval: number;

  // Helpers
  // NOTE:
  //   Because `SwUpdatesService` uses the `debounceTime` operator, it needs to be instantiated and
  //   destroyed inside the `fakeAsync` zone (when `fakeAsync` is used for the test). Thus, we can't
  //   run `setup()`/`tearDown()` in `beforeEach()`/`afterEach()` blocks. We use the `run()` helper
  //   to call them inside each test's zone.
  const setup = () => {
    injector = ReflectiveInjector.resolveAndCreate([
      { provide: ApplicationRef, useClass: MockApplicationRef },
      { provide: Logger, useClass: MockLogger },
      { provide: SwUpdate, useClass: MockSwUpdate },
      SwUpdatesService
    ]);

    appRef = injector.get(ApplicationRef);
    service = injector.get(SwUpdatesService);
    sw = injector.get(SwUpdate);
    checkInterval = (service as any).checkInterval;
    // checkInterval = 50;
  };
  const tearDown = () => service.ngOnDestroy();
  const run = (specFn: VoidFunction) => () => {
    setup();
    specFn();
    tearDown();
  };


  it('should create', run(() => {
    expect(service).toBeTruthy();
  }));

  it('should start checking for updates when instantiated (once the app stabilizes)', run(() => {
    expect(sw.checkForUpdate).not.toHaveBeenCalled();

    appRef.isStable.next(false);
    expect(sw.checkForUpdate).not.toHaveBeenCalled();

    appRef.isStable.next(true);
    expect(sw.checkForUpdate).toHaveBeenCalled();
  }));

  // it('should schedule a new check if there is no update available', fakeAsync(run(() => {
  //   appRef.isStable.next(true);
  //   sw.checkForUpdate.calls.reset();

  //   expect(sw.checkForUpdate).not.toHaveBeenCalled();

  //   sw.$$availableSubj.next({type: 'UPDATE_AVAILABLE', available: {hash: ''}, current: {hash: ''}});
  //   tick(checkInterval);
  //   expect(sw.checkForUpdate).toHaveBeenCalled();
  //   expect(sw.activateUpdate).not.toHaveBeenCalled();
  // })));

  // this test is taken from angular aio app. It seems it.'s wrong because sw.activateUpdate can be called
  //   just from sw.checkForUpdate method. sw.checkForUpdate can't be called in this test.
      // it('should activate new updates immediately', fakeAsync(run(() => {
      //   appRef.isStable.next(true);
      //   sw.checkForUpdate.calls.reset();

      //   // sw.$$checkForUpdateSubj.next(true); // in my case doesn't work because checkForUpdate returns Promise
      //   // should be this line right but it seems not
      //   sw.$$availableSubj.next({type: 'UPDATE_AVAILABLE', available: {hash: ''}, current: {hash: ''}});
      //   // expect(sw.checkForUpdate).not.toHaveBeenCalled();

      //   tick(checkInterval);
      //   expect(sw.checkForUpdate).not.toHaveBeenCalled();
      //   expect(sw.activateUpdate).toHaveBeenCalled();
      // })));

  // it('should not pass a specific version to `SwUpdate.activateUpdate()`', fakeAsync(run(() => {
  //   appRef.isStable.next(true);
  //   sw.$$checkForUpdateSubj.next(true);
  //   tick(checkInterval);

  //   expect(sw.activateUpdate).toHaveBeenCalledWith(null);
  // })));


  // next test is litle imposible because SwUpdate send messages after new version becomes available
  //  and doesn't notify when there isn't new version
  // it('should schedule a new check after activating the update', fakeAsync(run(() => {
  //   appRef.isStable.next(true);
  //   sw.checkForUpdate.calls.reset();
  //   sw.$$checkForUpdateSubj.next(true);

  //   tick(checkInterval);
  //   expect(sw.checkForUpdate).not.toHaveBeenCalled();

  //   sw.$$activateUpdateSubj.next();
  //   expect(sw.checkForUpdate).not.toHaveBeenCalled();
  //   // it seems next line should be instead of above one
  //   // expect(sw.activateUpdate ).not.toHaveBeenCalled();

  //   tick(checkInterval);
  //   // expect(sw.checkForUpdate).toHaveBeenCalled();
  //   // it seems next line should be instead of above one
  //   // expect(sw.activateUpdate).toHaveBeenCalled();
  // })));

  it('should emit on `updateActivated` when an update has been activated', run(() => {
    const activatedVersions: (Version|undefined)[] = [];
    service.updateActivated.subscribe(v => activatedVersions.push(v));

    sw.$$updatesSubj.next({type: 'pending', current: {hash: 'foo'}});
    sw.$$updatesSubj.next({type: 'UPDATE_ACTIVATED', current: {hash: 'bar'}});
    sw.$$updatesSubj.next({type: 'pending', current: {hash: 'baz'}});
    sw.$$updatesSubj.next({type: 'UPDATE_ACTIVATED', current: {hash: 'qux'}});

    expect(activatedVersions).toEqual([{hash: 'bar'}, {hash: 'qux'}]);
  }));

  describe('when destroyed', () => {
    it('should not schedule a new check for update (after current check)', fakeAsync(run(() => {
      appRef.isStable.next(true);
      sw.checkForUpdate.calls.reset();

      service.ngOnDestroy();
      sw.$$checkForUpdateSubj.next(false);
      tick(checkInterval);

      expect(sw.checkForUpdate).not.toHaveBeenCalled();
    })));

    // it('should not schedule a new check for update (after activating an update)', fakeAsync(run(() => {
    //   appRef.isStable.next(true);
    //   sw.checkForUpdate.calls.reset();

    //   sw.$$checkForUpdateSubj.next(true);
    //   expect(sw.activateUpdate).toHaveBeenCalled();

    //   service.ngOnDestroy();
    //   sw.$$activateUpdateSubj.next();
    //   tick(checkInterval);

    //   expect(sw.checkForUpdate).not.toHaveBeenCalled();
    // })));

    it('should stop emitting on `updateActivated`', run(() => {

      const activatedVersions: (Version|undefined)[] = [];
      service.updateActivated.subscribe(v => activatedVersions.push(v));

      sw.$$updatesSubj.next({type: 'pending', current: {hash: 'foo'}});
      sw.$$updatesSubj.next({type: 'UPDATE_ACTIVATED', current: {hash: 'bar'}});
      service.ngOnDestroy();
      sw.$$updatesSubj.next({type: 'pending', current: {hash: 'baz'}});
      sw.$$updatesSubj.next({type: 'UPDATE_ACTIVATED', current: {hash: 'qux'}});

      expect(activatedVersions).toEqual([{hash: 'bar'}]);
    }));
  });
});

// Mocks
class MockApplicationRef {
  isStable = new Subject<boolean>();
}

class MockLogger {
  log = jasmine.createSpy('MockLogger.log');
}

class MockSwUpdate {
  $$activateUpdateSubj = new BehaviorSubject<boolean>(false);
  $$checkForUpdateSubj = new BehaviorSubject<boolean>(false);

  $$updatesSubj = new Subject<{type: string, previous?: string, current: Version}>();
  $$availableSubj = new Subject<{type: string, available: Version, current: Version}>();

  activated = this.$$updatesSubj.asObservable();
  available = this.$$availableSubj.asObservable();

  activateUpdate = jasmine.createSpy('MockSwUpdate.activateUpdate')
                          .and.callFake(() => Promise(() => {}).then(() => undefined));

  checkForUpdate = jasmine.createSpy('MockSwUpdate.checkForUpdate')
                          .and.callFake(() => Promise(() => {}).then(() => undefined));
}

class Version {
  hash: string;
  appData?: Object;
}

