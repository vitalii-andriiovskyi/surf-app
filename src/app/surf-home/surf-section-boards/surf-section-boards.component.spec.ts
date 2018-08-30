import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';


import { SurfSectionBoardsComponent } from './surf-section-boards.component';
import { Component, OnInit, OnDestroy, AfterViewInit, AfterViewChecked,
  ViewChildren, ContentChildren, QueryList, Inject } from '@angular/core';

import { Observable, Subscription } from 'rxjs';

import { ResizeService } from '../../core/resize.service';
import { WINDOW, WINDOW_PROVIDERS } from '../../core/window-ref.service';

import { CurrentHeightDirective } from '../../shared/currentHeight.directive';
import { MakeNavStickyDirective } from '../../core/surf-carousel/make-nav-sticky.directive';
import { PassScrollingDataService } from '../../core/services/pass-scrolling-data.service';

import { BoardData, Dimention, BoardImage, TabsetDescription, TabsetImages, ActivatedTab, Tabset } from '../board-data';
import { BoardService } from '../board.service';
import { BoardStubService } from '../testing/board-stub.service';

import { NgbTabsetConfig } from '@ng-bootstrap/ng-bootstrap';
import { NgbTabset, NgbTabTitle, NgbTabContent, NgbTab, NgbTabChangeEvent } from '@ng-bootstrap/ng-bootstrap';
// import { NgbTabsetConfig } from '@ng-bootstrap/ng-bootstrap/tabset/tabset-config';
// import { NgbTabset, NgbTabTitle, NgbTabContent, NgbTab, NgbTabChangeEvent } from '@ng-bootstrap/ng-bootstrap/tabset/tabset';
import { NgbTabsetExpandedComponent } from './ngb-tabset-expanded.component';
import { NgbTabsetGridedComponent } from './ngb-tabset-grided.component';
import { SurfCarouselComponent, CarouselSlideDirective } from '../../core/surf-carousel/surf-carousel.component';
import { ActivatedRoute, ActivatedRouteStub, Router, RouterStub, RouterLinkStubDirective } from '../../../testing/router-stubs';
import { boardData } from '../../core/services/ajax-api.mock-data';

let activatedRoute: ActivatedRouteStub;
let comp: SurfSectionBoardsComponent;
let component: TestComponent;
let fixture: ComponentFixture<TestComponent>;
// let fixtureTest: ComponentFixture<TestComponent>;
let page: Page;



describe('SurfSectionBoardsComponent', () => {
  let originalTimeout;
  beforeEach(async(() => {
      originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
      jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;

    TestBed.configureTestingModule({
      imports: [ BrowserAnimationsModule ],
      declarations: [
        SurfSectionBoardsComponent,
        NgbTabsetExpandedComponent,
        NgbTabsetGridedComponent,
        SurfCarouselComponent,
        NgbTabset,
        NgbTabTitle,
        NgbTabContent,
        NgbTab,
        RouterLinkStubDirective,
        CarouselSlideDirective,
        MakeNavStickyDirective,
        CurrentHeightDirective,
        TestComponent
      ],
      // schemas:      [ NO_ERRORS_SCHEMA ],
      providers: [
        {provide: BoardService, useClass: BoardStubService },
        ResizeService,
        PassScrollingDataService,
        NgbTabsetConfig,
        {provide: Router, useValue: RouterStub },
        {provide: ActivatedRoute, useValue: activatedRoute },
        WINDOW_PROVIDERS,
      ],

    })
    .compileComponents();
  }));

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    page = new Page();
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      // 2nd change detection displays the async-fetched data
      fixture.detectChanges();
      page.addPageElements();
    });


  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show text of first slide', () => {
    expect(page.bordName.nativeElement.textContent).toBe('JR Surfboards The Donny Stoker Yellow/Green Rail Fade', 'text in h4');
    expect(page.tabPanelImage.nativeElement.alt).toBe('Board', 'alt of image');
    expect(page.tabDescription.nativeElement.textContent).toContain('Description', 'should be Description');
  });

  // test below works but it causes problems to another tests
  // it('should show chosen tab content after backing on slide', (done: any) => {
  //   const selectedTab = fixture.debugElement.queryAll(By.css('.board-description .nav-link'))[1];

  //   selectedTab.triggerEventHandler('click', null);
  //   fixture.detectChanges();

  //   expect(selectedTab.nativeElement.classList.contains('active')).toBe(true);
  //   page.deNavButtons[1].triggerEventHandler('click', null);
  //   page.deNavButtons[0].triggerEventHandler('click', null);
  //   fixture.detectChanges();


  //   // setTimeout(() => {
  //   //   page.deNavButtons[0].triggerEventHandler('click', null);
  //   //   fixture.detectChanges();
  //   // }, 1);

  //   // setTimeout(() => {
  //   //   fixture.detectChanges();
  //   //   page.tabDescription = fixture.debugElement.queryAll(By.css('.board-description .nav-link'))[0];
  //   //   expect(page.tabDescription.nativeElement.classList.contains('active')).toBe(true, '');


  //   // }, 1);

  //   // setTimeout(() => {
  //   //   fixture.detectChanges();
  //   // }, 4);

  //   setTimeout(() => {
  //     fixture.detectChanges();
  //     page.bordName = fixture.debugElement.query(By.css('.board-description-wrapper h4'));
  //     page.tabDescription = fixture.debugElement.query(By.css('.board-description .nav-link.active'));
  //     expect(page.bordName.nativeElement.textContent).toBe(selectedTab.nativeElement.textContent,
  //     'should be second chosen tab on slide 1');
  //   }, 4);

  //   done()

  // });

  afterEach(function() {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
  });
});

class Page {
  tabPanelImage: DebugElement;
  tabImage: DebugElement;

  bordName: DebugElement;

  tabPanelDescription: DebugElement;
  tabDescription: DebugElement;

  deNavButtons: DebugElement[];
  rightButton: HTMLElement;
  leftButton: HTMLElement;

  deSlide: DebugElement;
  spyNextSlide: jasmine.Spy;

  carouselComponent: SurfCarouselComponent;

  constructor() {

  }

  addPageElements() {
    this.carouselComponent = fixture.debugElement.query(By.css('surf-carousel')).componentInstance;
    // this.spyNextSlide = spyOn(this.carouselComponent, 'nextSlide').and.returnValue(Promise.resolve('kk'));

    this.tabPanelImage = fixture.debugElement.query(By.css('.boards-images-wrapper .tab-pane img'));
    this.tabImage = fixture.debugElement.query(By.css('.boards-images-wrapper .nav-link.active'));

    this.bordName = fixture.debugElement.query(By.css('.board-description-wrapper h4'));

    this.tabDescription = fixture.debugElement.query(By.css('.board-description .nav-link.active'));
    this.tabPanelDescription = fixture.debugElement.query(By.css('.board-description .tab-pane > *'));
    this.deSlide = fixture.debugElement.query(By.css('.boards-carousel-item-wrapper'));

    if (!this.leftButton) {
      this.deNavButtons = fixture.debugElement.queryAll(By.css('.surf-carousel-nav > div'));
      this.leftButton = this.deNavButtons[0].nativeElement;
      this.rightButton = this.deNavButtons[1].nativeElement;
    }
  }

}

@Component({
  template: `
    <surf-section-boards [boardsData]="boardsData"></surf-section-boards>
  `
})
class TestComponent implements OnInit {
  boardsData: BoardData[] = boardData;

  constructor() {

  }

  ngOnInit() { }
}
