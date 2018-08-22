import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { SurfFooterComponent } from './surf-footer.component';
import { ActivatedRoute, ActivatedRouteStub, Router, RouterStub, RouterLinkStubDirective } from '../../testing/router-stubs';

let activatedRoute: ActivatedRouteStub;

describe('SurfFooterComponent', () => {
  let component: SurfFooterComponent;
  let fixture: ComponentFixture<SurfFooterComponent>;

  let de: DebugElement;
  let menuA: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurfFooterComponent, RouterLinkStubDirective],
      providers: [
        {provide: Router, useValue: RouterStub },
        {provide: ActivatedRoute, useValue: activatedRoute },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurfFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
