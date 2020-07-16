import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement, NO_ERRORS_SCHEMA, Component, OnInit } from '@angular/core';
import { By } from '@angular/platform-browser';

import { Subscription } from 'rxjs';
import { of } from 'rxjs';

import { SurfSectionTeamComponent } from './surf-section-team.component';
import { ResizeService } from '../../core/services/resize.service';
import { WINDOW, WINDOW_PROVIDERS } from '../../core/services/window-ref.service';

import { TeamData  } from './team-data';

import { ActivatedRoute, ActivatedRouteStub, Router, RouterStub, RouterLinkStubDirective } from '../../../testing/router-stubs';
import { teamData } from '../../core/services/ajax-api.mock-data';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

let activatedRoute: ActivatedRouteStub;

describe('SurfSectionTeamComponent', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  let deSlide: DebugElement;
  let nameEl: DebugElement;
  let accountNameEl: DebugElement;
  let addressEl: DebugElement;
  let linkEl: DebugElement;

  let getTeamDataSpy: jasmine.Spy;

  beforeEach(async(() => {
    const teamDatas: TeamData[] = teamData;
    // const teamService = jasmine.createSpyObj('TeamService', ['getTeamData']);
    // getTeamDataSpy = teamService.getTeamData.and.returnValue( of(teamDatas) );

    TestBed.configureTestingModule({
      imports: [ CarouselModule, NoopAnimationsModule ],
      declarations: [
        SurfSectionTeamComponent,
        RouterLinkStubDirective,
        TestComponent
      ],
      providers: [
        // { provide: TeamService, useValue: teamService },
        ResizeService,
        {provide: Router, useValue: RouterStub },
        {provide: ActivatedRoute, useValue: activatedRoute },
        WINDOW_PROVIDERS,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show data in first slide', () => {
    fixture.detectChanges();

    // getTeamDataSpy.calls.mostRecent().returnValue.subscribe(() => {
      deSlide = fixture.debugElement.query(By.css('.owl-item.active'));

      nameEl = deSlide.query(By.css('h5'));
      accountNameEl = deSlide.query(By.css('h5 + p'));
      addressEl = deSlide.query(By.css('p:last-child'));
      linkEl = deSlide.query(By.css('.team-member-link'));

      expect(nameEl.nativeElement.textContent).toBe('Taj Burrow', 'should show name of worker');
      expect(accountNameEl.nativeElement.textContent).toContain('@tajamos', 'should show account name of worker');
      expect(addressEl.nativeElement.textContent).toContain('Yallingup, Australia', 'should show address of worker');
      expect(linkEl.nativeElement.getAttribute('href')).toBe('https://www.instagram.com/', 'should show link of account of worker');
    //   done();
    // });
  });
});


@Component({
  template: `
   <surf-section-team [teamData]="teamData"></surf-section-team>
  `
})
class TestComponent implements OnInit {
  teamData: TeamData[] = teamData;

  constructor() { }

  ngOnInit() { }
}
