import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { SurfSectionSocNetComponent } from './surf-section-soc-net.component';
import { FacebookModule, FacebookService, InitParams } from 'ngx-facebook';

describe('SurfSectionSocNetComponent', () => {
  let component: SurfSectionSocNetComponent;
  let fixture: ComponentFixture<SurfSectionSocNetComponent>;
  let deH2: DebugElement;

  let getBlogDataSpy: jasmine.Spy;

  beforeEach(async(() => {
    const facebookService = jasmine.createSpyObj('FacebookService', ['init']);
    getBlogDataSpy = facebookService.init.and.returnValue( null );

    TestBed.configureTestingModule({
      imports: [ FacebookModule ],
      declarations: [ SurfSectionSocNetComponent ],
      providers: [
        {provide: FacebookService, useValue: facebookService }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurfSectionSocNetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    deH2 = fixture.debugElement.query(By.css('h2'));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should h2 have text -Instagram-', () => {
    expect(deH2.nativeElement.textContent).toContain('Instagram');
  });
});
