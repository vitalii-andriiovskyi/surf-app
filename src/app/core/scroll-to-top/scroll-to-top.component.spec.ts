import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { ScrollToTopComponent } from './scroll-to-top.component';
import { PassScrollingDataService } from '../pass-scrolling-data.service';
import { Component, DebugElement } from '@angular/core';
import { CatchScrollOuterzoneDirective } from '../directives/catch-scroll-outerzone.directive';
import { By } from '@angular/platform-browser';

describe('ScrollToTopComponent', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let deScrollToTop: DebugElement;
  let elScrollToTop: HTMLElement;
  let deElWrapper: DebugElement;
  let elWrapper: HTMLElement;
  let passScrollDataService: PassScrollingDataService;
  let newScrollTop: number;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestComponent, ScrollToTopComponent, CatchScrollOuterzoneDirective ],
      providers: [ PassScrollingDataService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    deScrollToTop = fixture.debugElement.query(By.css('.to-top'));
    elScrollToTop = deScrollToTop.nativeElement;
    deElWrapper = fixture.debugElement.query(By.css('.main-surf-wrapper'));
    elWrapper = deElWrapper.nativeElement;

    passScrollDataService = fixture.debugElement.injector.get(PassScrollingDataService);
    passScrollDataService.getNewScrollTop().subscribe((scrollObj) => newScrollTop = scrollObj.newScrollTop);
  });

  it(`should switch css-class '.d-none' whilst scrolling the page`, fakeAsync(() => {
    expect(elScrollToTop.classList.contains('d-none')).toBeTruthy('has class .d-none');

    elWrapper.scrollTop = 225;
    deElWrapper.triggerEventHandler('scroll', {target: elWrapper});
    tick();
    fixture.detectChanges();

    expect(elScrollToTop.classList.contains('d-none')).toBeTruthy('has class .d-none');

    elWrapper.scrollTop = 1000;
    deElWrapper.triggerEventHandler('scroll', {target: elWrapper});
    tick();
    fixture.detectChanges();

    expect(elScrollToTop.classList.contains('d-none')).toBeFalsy('hasn\'t class .d-none');

    elWrapper.scrollTop = 225;
    deElWrapper.triggerEventHandler('scroll', {target: elWrapper});
    tick();
    fixture.detectChanges();

    expect(elScrollToTop.classList.contains('d-none')).toBeTruthy('has class .d-none');
  }));

  it(`should init scrolling of the page (more exactly element with .main-surf-wrapper) to top`, fakeAsync(() => {
    elWrapper.scrollTop = 1000;
    deElWrapper.triggerEventHandler('scroll', {target: elWrapper});
    tick();
    fixture.detectChanges();
    expect(elScrollToTop.classList.contains('d-none')).toBeFalsy('hasn\'t class .d-none');

    deScrollToTop.triggerEventHandler('click', null);
    tick();

    expect(newScrollTop).toBe(0, '0');
  }));

});

@Component({
  template: `
    <div class="main-surf-wrapper" surfCatchScrollOuterzone>
      <div class="wrapper-inner">
      </div>
      <surf-scroll-to-top></surf-scroll-to-top>
    </div>
  `,
  styles: [`
    .main-surf-wrapper {
      overflow-y: scroll;
      position: absolute;
      height: 500px;
      width: 100%;
    }
    .wrapper-inner {
      position: relative;
      height: 1700px;
      width: 100%;
    }
  `],
})
class TestComponent {
}
