import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Subject } from 'rxjs';

import { PostItem } from '../post/post';
import { PostListComponent } from './post-list.component';

import { ActivatedRoute, Router, Data } from '@angular/router';
import { ActivatedRouteStub, RouterStub, RouterLinkStubDirective } from '../../../testing/router-stubs';

import { HandleLinkDirective } from '../../shared/handle-link.directive';
import { AddContentDirective } from '../../shared/add-content.directive';

import { LocationService } from '../../core/services/location.service';
import { SwUpdatesService } from '../../core/sw-updates/sw-updates.service';
import { WINDOW_PROVIDERS } from '../../core/window-ref.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DebugElement } from '@angular/core';

const postData: PostItem[] = [{
  id: 'post-1',
  title: 'Post 1',
  date: '',
  author: '****',
  body: `<p class="article-text">Hello</p>`,
  summary: '<p>This is</p>',
  category: 'City',
},
{
  id: 'post-2',
  title: 'Post 2',
  date: '',
  author: '****',
  body: `<p class="article-text">Hi</p>`,
  summary: '<p>This is</p>',
  category: 'City',
}
];

describe('PostListComponent', () => {
  let component: PostListComponent;
  let fixture: ComponentFixture<PostListComponent>;
  let activatedRoute: ActivatedRouteStub;
  let de: DebugElement[];
  // let el: HTMLElement;

  beforeEach(async(() => {
    activatedRoute = new ActivatedRouteStub();

    TestBed.configureTestingModule({
      declarations: [ PostListComponent, AddContentDirective, HandleLinkDirective, RouterLinkStubDirective ],
      providers: [
        LocationService,
        { provide: SwUpdatesService, useClass: MockSwUpdatesService },
        { provide: Router, useClass: RouterStub },
        { provide: ActivatedRoute, useValue: activatedRoute},
        WINDOW_PROVIDERS
      ]
    })
    .compileComponents();
  }));

  beforeEach(async(() => {
    activatedRoute.testData = {posts: postData};

    fixture = TestBed.createComponent(PostListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    de = fixture.debugElement.queryAll(By.css('article'));
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have two articles-desription', () => {
    fixture.detectChanges();

    expect(de.length).toBe(2);
  });

  it('should be content in first article', () => {
    fixture.detectChanges();

    const heading: HTMLElement = de[0].query(By.css('h2')).nativeElement;
    expect(heading.textContent).toContain(postData[0].title);

    const summary: HTMLElement = de[0].query(By.directive(AddContentDirective)).nativeElement;
    expect(summary.textContent).toContain('This is');
  });
});


class Version {
  hash: string;
  appData?: Object;
}

class MockSwUpdatesService {
  updateActivated = new Subject<{current: Version}>();
}
