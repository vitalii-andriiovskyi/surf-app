import { tick, fakeAsync, async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';

import { SurfCarouselComponent, CarouselSlideDirective } from './surf-carousel.component';

import { CatchScrollOuterzoneDirective } from '../catch-scroll-outerzone.directive';
import { MakeNavStickyDirective } from './make-nav-sticky.directive';
import { CurrentHeightDirective } from './currentHeight.directive';

import { PassScrollingDataService } from '../pass-scrolling-data.service';
import { ResizeService } from '../resize.service';
import { WINDOW_PROVIDERS } from '../window-ref.service';

@Component({
  template: `
    <div class="carousel-wrapper">
      <surf-carousel>

        <ng-template carouselSlide id="slide0">
          <div class="slide-content" style="height: 100px; width: 1300px">Slide 1</div>
        </ng-template>

        <ng-template carouselSlide id="slide1">
          <div class="slide-content" style="height: 100px; width: 1300px">Slide 2</div>
        </ng-template>

        <ng-template carouselSlide id="slide2">
          <div class="slide-content" style="height: 100px; width: 1300px">Slide 3</div>
        </ng-template>
      </surf-carousel>
    </div>
  `,
 })
class TestComponent { }

describe('SurfCarouselComponent', () => {
  let hostComponent: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let deCarouselComponent: DebugElement;
  let carouselComponent: SurfCarouselComponent;

  let deNavButtons: DebugElement[];
  let rightButton: HTMLElement;
  let leftButton: HTMLElement;

  let deSlide: DebugElement;

  let originalTimeout: any;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ BrowserAnimationsModule ],
      declarations: [
        TestComponent,
        SurfCarouselComponent,
        CarouselSlideDirective,
        MakeNavStickyDirective,
        CurrentHeightDirective
      ],
      providers: [
        WINDOW_PROVIDERS,
        ResizeService,
        PassScrollingDataService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 30000;

    fixture = TestBed.createComponent(TestComponent);
    hostComponent = fixture.componentInstance;

    fixture.detectChanges();
    // get access to SurfCarouselComponent
    deCarouselComponent = fixture.debugElement.query(By.css('surf-carousel'));
    carouselComponent = deCarouselComponent.componentInstance;

    deNavButtons = fixture.debugElement.queryAll(By.css('.surf-carousel-nav > div'));
    leftButton = deNavButtons[0].nativeElement;
    rightButton = deNavButtons[1].nativeElement;
  });

  it('should create', () => {
    expect(hostComponent).toBeTruthy();
  });

  it('should show first slide', (done: any) => {
    deSlide = fixture.debugElement.query(By.css('.slide-content'));
    expect(deSlide.nativeElement.textContent).toBe('Slide 1', 'text in first slide');
    expect(leftButton.classList.contains('disabled')).toBe(true, 'left button must be disabled');
    expect(carouselComponent.slidersId.length).toBe(3, 'should be 3 sliders and 3 sliders\'s id');

    expect(carouselComponent.nextSlideId).toBe('slide1', 'id of next slide should be slide1');
    expect(carouselComponent.carouselSliderState).toBe('rightActive', 'animation state');
    done();
  });

  it('should show second slide after clicking on right arrow-button', fakeAsync(() => {
    // carouselComponent.nextSlide();
    deNavButtons[1].triggerEventHandler('click', null);
    tick(2);
    fixture.detectChanges();

    // setTimeout is needed because function which changes slides has setTimeout and testing must wait some time (time could be different)
    // setTimeout(() => {

      expect(carouselComponent.nextSlideId).toBe('slide2', 'id of next slide should be slide2');
      expect(carouselComponent.prevSlideId).toBe('slide0', 'id of prev slide should be slide0');
      expect(carouselComponent.currentSlideId).toBe('slide1', 'id of current slide should be slide1');

      fixture.detectChanges();

      deSlide = fixture.debugElement.query(By.css('.slide-content'));
      expect(deSlide.nativeElement.textContent).toBe('Slide 2', 'text in second slide');
    // }, 2);
    tick(2);

  }));

  it('should show first slide after clicking on right arrow-button and then left arrow-button', fakeAsync(() => {

    // carouselComponent.nextSlide();
    deNavButtons[1].triggerEventHandler('click', null);
    tick(2);
    fixture.detectChanges();
    deNavButtons[0].triggerEventHandler('click', null);
    tick(2);

    fixture.detectChanges();

    expect(carouselComponent.carouselSliderState).toBe('leftActive', 'animation state');

    expect(carouselComponent.nextSlideId).toBe('slide1', 'id of next slide should be slide1');
    expect(carouselComponent.prevSlideId).toBe('slide0', 'id of prev slide should be slide0');
    fixture.detectChanges();

    expect(carouselComponent.currentSlideId).toBe('slide0', 'id of current slide should be slide0');
    deSlide = fixture.debugElement.query(By.css('.slide-content'));
    expect(deSlide.nativeElement.textContent).toBe('Slide 1', 'text in first slide');
    tick(2);

  }));

  it('should show third slide after clicking on right arrow-button and again right arrow-button', fakeAsync(() => {

    // carouselComponent.nextSlide();
    deNavButtons[1].triggerEventHandler('click', null);
    tick(2);
    deNavButtons[1].triggerEventHandler('click', null);
    tick(2);
    fixture.detectChanges();

    deNavButtons[1].triggerEventHandler('click', null);
    tick(2);
    fixture.detectChanges();

    expect(carouselComponent.carouselSliderState).toBe('rightActive', 'animation state');

    // expect(carouselComponent.nextSlideId).toBe('slide2', 'id of next slide should be slide2');
    expect(carouselComponent.prevSlideId).toBe('slide1', 'id of prev slide should be slide1');
    fixture.detectChanges();

    expect(carouselComponent.currentSlideId).toBe('slide2', 'id of current slide should be slide2');
    deSlide = fixture.debugElement.query(By.css('.slide-content'));
    expect(deSlide.nativeElement.textContent).toBe('Slide 3', 'text in first slide');

    tick(2);
  }));

  afterEach(function() {
      jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
    });
});
