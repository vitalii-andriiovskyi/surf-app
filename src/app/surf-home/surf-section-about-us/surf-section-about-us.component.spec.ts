import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, ActivatedRouteStub, Router, RouterStub, RouterLinkStubDirective } from '../../../testing/router-stubs';

import { SurfSectionAboutUsComponent } from './surf-section-about-us.component';
import { NO_ERRORS_SCHEMA } from '@angular/compiler/src/core';

let activatedRoute: ActivatedRouteStub;

describe('SurfSectionAboutUsComponent', () => {
  let component: SurfSectionAboutUsComponent;
  let fixture: ComponentFixture<SurfSectionAboutUsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurfSectionAboutUsComponent, RouterLinkStubDirective ],
      schemas: [ NO_ERRORS_SCHEMA ],
      providers: [
        {provide: Router, useValue: RouterStub },
        { provide: ActivatedRoute, useValue: activatedRoute },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurfSectionAboutUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
