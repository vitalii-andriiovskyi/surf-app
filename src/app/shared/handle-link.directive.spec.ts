import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Subject } from 'rxjs';

import { HandleLinkDirective } from './handle-link.directive';
import { LocationService } from '../core/services/location.service';
import { SwUpdatesService } from '../core/sw-updates/sw-updates.service';
import { Router } from '@angular/router';
import { click, RouterStub } from '../../testing';
import { WINDOW_PROVIDERS } from '../core/services/window-ref.service';

@Component({
  template: `
    <div class="wrapper" surfHandleLink>
      <a class="internal-link" href="/blog/somepage">Somepage</a>
    </div>
  `
})
class TestComponent {
}


describe('HandleLinkDirective', () => {

  let comp: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let router: any;
  let de: DebugElement;
  let el: HTMLElement;
  let navigateSpy: jasmine.Spy;
  let locationService: LocationService;

  beforeEach(async(() => {
    const routerSpy = createRouterSpy();

    TestBed.configureTestingModule({
      declarations: [
        TestComponent,
        HandleLinkDirective
      ],
      providers: [
        LocationService,
        { provide: SwUpdatesService, useClass: MockSwUpdatesService },
        { provide: Router, useValue: routerSpy },
        WINDOW_PROVIDERS
      ]
    })
    .compileComponents();

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);

    locationService = fixture.debugElement.injector.get(LocationService);

    comp = fixture.componentInstance;
    router = <any>fixture.debugElement.injector.get(Router);
    navigateSpy = router.navigate;

    fixture.detectChanges();

    de = fixture.debugElement.query(By.css('a.internal-link'));
    el = de.nativeElement;

  });

  it('should call router.navigate() after clicking on <a class="internal-link" href="/blog/somepage"> ', () => {
    fixture.detectChanges();
    // const clickSpy = spyOn(router, 'navigate').and.callThrough();

    de.triggerEventHandler('click', null);
    click(de.nativeElement);
    // expect(clickSpy).toHaveBeenCalled();

    expect(navigateSpy.calls.any()).toBe(true, 'router.navigate called');
  });
});



class Version {
  hash: string;
  appData?: Object;
}

class MockSwUpdatesService {
  updateActivated = new Subject<{current: Version}>();
}

function createRouterSpy() {
  return jasmine.createSpyObj('Router', ['navigate']);
}
