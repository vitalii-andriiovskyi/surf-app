import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { SurfHomeComponent } from './surf-home.component';

import { ResizeService } from '../core/resize.service';
import { WINDOW_PROVIDERS } from '../core/window-ref.service';
import { BoardService } from './board.service';
import { BoardStubService } from './testing/board-stub.service';
import { HomeService } from './home.service';
import { AjaxApiService } from '../core/services/ajax-api.service';
import { AjaxApiMockService } from '../core/services/ajax-api.mock.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('SurfHomeComponent', () => {
  let component: SurfHomeComponent;
  let fixture: ComponentFixture<SurfHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ BrowserAnimationsModule ],
      declarations: [ SurfHomeComponent ],
      schemas:      [ NO_ERRORS_SCHEMA ],
      providers: [
        ResizeService,
        WINDOW_PROVIDERS,
        { provide: BoardService, useClass: BoardStubService },
        HomeService,
        { provide:  AjaxApiService, useClass: AjaxApiMockService},
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurfHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
