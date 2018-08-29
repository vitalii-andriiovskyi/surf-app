import { ScrollDirective } from './scroll.directive';
import { CatchScrollOuterzoneDirective } from '../catch-scroll-outerzone.directive';
import { PassScrollingDataService } from '../pass-scrolling-data.service';
import { ComponentFixture, async, TestBed, tick, fakeAsync } from '@angular/core/testing';
import { DebugElement, Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { RouterStub } from '../../../testing';
import { AnimationFrameService } from '../services/animation-frame.service';
import { ScrollToTopComponent } from '../scroll-to-top/scroll-to-top.component';


describe('ScrollDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let deElWrapper: DebugElement;
  let elWrapper: HTMLElement;
  let router: Router;
  let deScrollToTop: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestComponent, CatchScrollOuterzoneDirective, ScrollDirective, ScrollToTopComponent ],
      providers: [
        PassScrollingDataService,
        AnimationFrameService,
        { provide: Router, useClass: RouterStub}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    deElWrapper = fixture.debugElement.query(By.css('.main-surf-wrapper'));
    elWrapper = deElWrapper.nativeElement;
    deScrollToTop = fixture.debugElement.query(By.css('.to-top'));

    router = fixture.debugElement.injector.get(Router);
  });

  it(`should scroll .main-surf-wrapper after firing 'NavigationEnd' event`, fakeAsync(() => {

    elWrapper.scrollTop = 1100;
    deElWrapper.triggerEventHandler('scroll', {target: elWrapper});
    tick();
    fixture.detectChanges();
    expect(elWrapper.scrollTop).toBe(1100, '1100');

    router.navigate(['path']);
    tick(1000000);
    fixture.detectChanges();

    expect(elWrapper.scrollTop).toBe(0, '0');

  }));

  it(`should scroll .main-surf-wrapper after clicking on .to-top button`, fakeAsync(() => {

    elWrapper.scrollTop = 1100;
    deElWrapper.triggerEventHandler('scroll', {target: elWrapper});
    tick();
    fixture.detectChanges();
    expect(elWrapper.scrollTop).toBe(1100, '1100');

    deScrollToTop.triggerEventHandler('click', null);
    tick(2000000);
    fixture.detectChanges();

    expect(elWrapper.scrollTop).toBe(0, '0');

  }));

});

@Component({
  template: `
    <div class="main-surf-wrapper" surfCatchScrollOuterzone surfScroll>
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
