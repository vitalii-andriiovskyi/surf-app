import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Subject } from 'rxjs';
import { DebugElement } from '@angular/core';

import { PostComponent } from './post.component';
import { PostItem } from './post';
import { ActivatedRoute, Router, Data } from '@angular/router';
import { ActivatedRouteStub, RouterStub } from '../../../testing/router-stubs';


import { HandleLinkDirective } from '../../shared/handle-link.directive';
import { AddContentDirective } from '../../shared/add-content.directive';

import { LocationService } from '../../core/services/location.service';
import { SwUpdatesService } from '../../core/sw-updates/sw-updates.service';
import { WINDOW_PROVIDERS } from '../../core/window-ref.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


describe('PostComponent', () => {
  let component: PostComponent;
  let fixture: ComponentFixture<PostComponent>;
  let activatedRoute: ActivatedRouteStub;

  let article: DebugElement[];

  const postItemData: PostItem = {
    id: 'post-1',
    title: 'Post 1',
    date: '',
    author: '****',
    body: `<p class="article-text">Hello</p>`,
    summary: '<p>This is</p>',
    category: 'City',
  };

  beforeEach(async(() => {
    activatedRoute = new ActivatedRouteStub();

    TestBed.configureTestingModule({
      imports: [ BrowserAnimationsModule],
      declarations: [ PostComponent, AddContentDirective, HandleLinkDirective ],
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
    activatedRoute.testData = {post: postItemData};

    fixture = TestBed.createComponent(PostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    article = fixture.debugElement.queryAll(By.css('article'));
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be just one article', () => {
    fixture.detectChanges();
    expect(article.length).toBe(1, 'there\'s just one article');

    const h1: HTMLElement = article[0].query(By.css('h1')).nativeElement;
    expect(h1.textContent).toContain('Post 1', 'there\'s -Post 1- in the heading');

    // const addContent = article[0].query(By.directive(AddContentDirective));
    // expect(addContent.nativeElement.textContent).toContain('Hello', 'there\'s -Hello- in the article');

    const bodyContent: HTMLElement = article[0].nativeElement.querySelector('.article-text');
    expect(bodyContent.textContent).toContain('Hello', 'there\'s -Hello- in the article');
  });
});


class Version {
  hash: string;
  appData?: Object;
}

class MockSwUpdatesService {
  updateActivated = new Subject<{current: Version}>();
}
