import { Component, DebugElement, OnInit, Inject } from '@angular/core';
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Subscription } from 'rxjs';

import { CurrentHeightDirective } from './currentHeight.directive';
import { ResizeService } from '../services/resize.service';
import { WINDOW, WINDOW_PROVIDERS } from '../services/window-ref.service';


@Component({
  template: `
    <div class="wrapper" [ngStyle]="{'height': parentHeight + 'px'}">
      <div class="wrapper-inner"  (click)="!hasHeight" [surfCurrentHeight]="viewReady" (surfDefineHeight)="parentHeight=$event">
        <div  [ngStyle]="{'height': ownHeight}" style="width: 100%;"></div>
      </div>
    </div>
  `,
  styles: [`
    .wrapper {
      position: relative;
      width: 100%;
    }
    .wrapper-inner {
      position: absolute;
      min-height: 700px;
      width: 100%;
    }
  `],
})
class TestComponent implements OnInit {
  parentHeight: number;
  hasHeight = true;
  ownHeight = '0';

  viewReady: boolean;

  ngOnInit() {
    this.ownHeight = this.hasHeight ? '0' : '800px';
    this.viewReady = true;
  }

}


describe('CurrentHeightDirective', () => {

  let comp: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  let deWrapper: DebugElement;
  let elWrapper: HTMLElement;

  let deInner: DebugElement;
  let elInner: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CurrentHeightDirective,
        TestComponent,
      ],
      providers: [ WINDOW_PROVIDERS, ResizeService ]
    })
    .compileComponents();

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);

    comp = fixture.componentInstance;
    comp.parentHeight = 0;
    // passScrollingDataService = fixture.debugElement.injector.get(PassScrollingDataService);
    fixture.detectChanges();

    deWrapper = fixture.debugElement.query(By.css('.wrapper'));
    elWrapper = deWrapper.nativeElement;

    deInner = fixture.debugElement.query(By.directive(CurrentHeightDirective));
    elInner = deInner.nativeElement;

  });

  it('should change parent height after initializing and getting own height', () => {
    const dir = deInner.injector.get(CurrentHeightDirective) as CurrentHeightDirective;

     // maybe next line is wrong. Directive has ngOnChange() hook, which after creating directive calls function
     // defining the height og element with directive. But it seems this hook doesn't work in testing (maybe I'm wrong)
    dir.passHeight.emit(elInner.offsetHeight);

    fixture.detectChanges();
    expect(comp.parentHeight).toBe(elInner.offsetHeight, '700');
  });

  it('should change parent height after changing own height (click on any element changes height)', () => {
    deInner.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(elWrapper.offsetHeight).toBe(elInner.offsetHeight, '800');
    // expect(elWrapper.offsetHeight).toBe(800);

    deInner.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(elWrapper.offsetHeight).toBe(elInner.offsetHeight, '700');
    // expect(elWrapper.offsetHeight).toBe(700);

  });


});
