import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';


import { CatchScrollOuterzoneDirective } from '../directives/catch-scroll-outerzone.directive';
import { MakeNavStickyDirective } from './make-nav-sticky.directive';
import { NavPositionState } from './surf-carousel.component';

import { PassScrollingDataService } from '../services/pass-scrolling-data.service';

@Component({
  template: `
    <div class="wrapper" surfCatchScrollOuterzone>
      <div class="wrapper-inner">
        <div class="navSticky" [(surfMakeNavSticky)]="navPositionState"
          [ngClass]="{'surf-carousel-nav-fixed': navPositionState.fixed, 'surf-carousel-nav-bottomed': navPositionState.bottomed}">
        </div>
      </div>
      <div class="wrapper-inner">
      </div>
    </div>
  `,
  styles: [`
    .wrapper {
      overflow-y: scroll;
      position: absolute;
      height: 500px;
      width: 100%;
    }
    .wrapper-inner {
      position: relative;
      height: 700px;
      width: 100%;
    }
    .navSticky {
      position: absolute;
      top: 10px;
      right: 0;
      width: 70px;
      height: 10px;
    }
  `],
})
class TestComponent {
  navPositionState: NavPositionState = {
    fixed: false,
    bottomed: false
  };

}


describe('MakeNavStickyDirective', () => {

  let comp: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let de: DebugElement;
  let el: HTMLElement;
  let passScrollingDataService: PassScrollingDataService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TestComponent,
        MakeNavStickyDirective,
        CatchScrollOuterzoneDirective
      ],
      providers: [ PassScrollingDataService ]
    })
    .compileComponents();

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);

    comp = fixture.componentInstance;
    passScrollingDataService = fixture.debugElement.injector.get(PassScrollingDataService);
    fixture.detectChanges();

    de = fixture.debugElement.query(By.directive(CatchScrollOuterzoneDirective));
    el = de.nativeElement;

  });

  it('should be positioned absotely before scrolling', () => {
    expect(comp.navPositionState.fixed).toBe(false);
    expect(comp.navPositionState.bottomed).toBe(false);
  });

  it('should be sticky after crossing the top line of body (any wrapper) by top of element-holder navigation', (done: any) => {
    // in real app body (any wrapper) is set to top window; in this test it goes after some text (height ~ 70px).
    // Thus navigation become sticky by scrollTop 81, but not 11 as it supposed to be
    el.scrollTop = 81;
    de.triggerEventHandler('scroll', {target: el});

    fixture.detectChanges();
    expect(comp.navPositionState.fixed).toBe(true);
    done();
  });

  it('should be bottomed after crossing the top of body (any wrapper) by bottom of element-holder navigation', (done: any) => {
    el.scrollTop = 782;
    de.triggerEventHandler('scroll', {target: el});

    fixture.detectChanges();
    expect(comp.navPositionState.bottomed).toBe(true);
    expect(comp.navPositionState.fixed).toBe(false);
    done();
  });

  it('should become sticky whiles scrolling up and being bottomed firstly', (done: any) => {
    el.scrollTop = 782;
    de.triggerEventHandler('scroll', {target: el});

    fixture.detectChanges();

    el.scrollTop = 700;
    de.triggerEventHandler('scroll', {target: el});

    fixture.detectChanges();
    expect(comp.navPositionState.fixed).toBe(true);
    expect(comp.navPositionState.bottomed).toBe(false);
    done();
  });

  // it('should create an instance', () => {
  //   const directive = new MakeNavStickyDirective();
  //   expect(directive).toBeTruthy();
  // });
});
