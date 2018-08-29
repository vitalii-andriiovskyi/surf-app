import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollToTopComponent } from './scroll-to-top.component';
import { PassScrollingDataService } from '../pass-scrolling-data.service';
import { ScrollPageService } from '../services/scroll-page.service';

describe('ScrollToTopComponent', () => {
  let component: ScrollToTopComponent;
  let fixture: ComponentFixture<ScrollToTopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScrollToTopComponent ],
      providers: [ PassScrollingDataService, ScrollPageService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrollToTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
