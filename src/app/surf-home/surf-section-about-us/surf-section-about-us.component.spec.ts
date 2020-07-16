import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, ActivatedRouteStub, Router, RouterStub, RouterLinkStubDirective } from '../../../testing/router-stubs';

import { SurfSectionAboutUsComponent } from './surf-section-about-us.component';
import { NO_ERRORS_SCHEMA, NgModule, Component, Input, Output, EventEmitter } from '@angular/core';
import { YouTubePlayerModule as YoutubePlayerModuleI } from '@angular/youtube-player';
import { DOCUMENT_PROVIDERS } from '../../core/services/document-ref.service';

let activatedRoute: ActivatedRouteStub;

@Component({
  selector: 'youtube-player',
  template: `<div>{{videoId}}</div>`
})
class YoutubePlayerComponent {
  @Input() videoId: string;
  @Input() height: string;
  @Input() width: string;
  @Input() protocol: string;
  @Input() playerVars: string;
  @Output() ready: EventEmitter<YT.Player> = new EventEmitter();
  @Output() change: EventEmitter<YT.Player> = new EventEmitter();
  constructor() {}
}
@NgModule({
  declarations: [ YoutubePlayerComponent ],
exports: [ YoutubePlayerComponent ]
})

class YoutubePlayerModule extends YoutubePlayerModuleI {}

describe('SurfSectionAboutUsComponent', () => {
  let component: SurfSectionAboutUsComponent;
  let fixture: ComponentFixture<SurfSectionAboutUsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [YoutubePlayerModule],
      declarations: [ SurfSectionAboutUsComponent, RouterLinkStubDirective ],
      // schemas: [ NO_ERRORS_SCHEMA ],
      providers: [
        DOCUMENT_PROVIDERS,
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
