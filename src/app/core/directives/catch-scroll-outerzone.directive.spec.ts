import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';


import { CatchScrollOuterzoneDirective } from './catch-scroll-outerzone.directive';

import { PassScrollingDataService } from '../services/pass-scrolling-data.service';

@Component({
  template: `
    <div class="wrapper" surfCatchScrollOuterzone>
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
  `],
})
class TestComponent {
}


describe('CatchScrollOuterzoneDirective', () => {

  let comp: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let de: DebugElement;
  let el: HTMLElement;
  let passScrollingDataService: PassScrollingDataService;
  let scrolledValue: number;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TestComponent,
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
    passScrollingDataService.passerData.subscribe(data => scrolledValue = data.target.scrollTop);
    fixture.detectChanges();

    de = fixture.debugElement.query(By.directive(CatchScrollOuterzoneDirective));
    el = de.nativeElement;

  });

  it('should pass data whilst scrolling', (done: any) => {
    // in real app body (any wrapper) is set to top window; in this test it goes after some text (height ~ 70px).
    // Thus navigation become sticky by scrollTop 81, but not 11 as it supposed to be
    el.scrollTop = 81;
    de.triggerEventHandler('scroll', {target: el});

    fixture.detectChanges();
    expect(scrolledValue).toBe(el.scrollTop);
    done();
  });

});
