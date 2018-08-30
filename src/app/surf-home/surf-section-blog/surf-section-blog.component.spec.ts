import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement, Component, OnInit } from '@angular/core';
import { By } from '@angular/platform-browser';
import { last } from 'rxjs/operators';
import { of } from 'rxjs';

import { SurfSectionBlogComponent } from './surf-section-blog.component';

import { ActivatedRoute, ActivatedRouteStub, Router, RouterStub, RouterLinkStubDirective } from '../../../testing/router-stubs';
import { PostItem } from '../../blog/post/post';
import { postList } from '../../core/services/ajax-api.mock-data';

let activatedRoute: ActivatedRouteStub;
let blogDatas: PostItem[];
const allBlogData: PostItem[] = postList;

describe('SurfSectionBlogComponent', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let deCards: DebugElement[];
  let deImgAlt: DebugElement;
  let deDescription: DebugElement;

  // let getBlogDataSpy: jasmine.Spy;


  beforeEach(async(() => {
    blogDatas = allBlogData;

    // const blogService = jasmine.createSpyObj('BlogService', ['getBlogData']);
    // getBlogDataSpy = blogService.getBlogData.and.returnValue( of(blogDatas) );

    TestBed.configureTestingModule({
      declarations: [ SurfSectionBlogComponent, RouterLinkStubDirective, TestComponent ],
      providers: [
        // {provide: BlogService, useValue: blogService},
        {provide: Router, useValue: RouterStub },
        {provide: ActivatedRoute, useValue: activatedRoute },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;

    deCards = fixture.debugElement.queryAll(By.css('.card'));
  });

  it('shouldn\'t have blog\'s data fetch before ngOnInit()', () => {
    expect(deCards.length).toBe(0);
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should show data after ngOnInit() (done())', () => {
    fixture.detectChanges();

    // getBlogDataSpy.calls.mostRecent().returnValue.subscribe(() => {
      fixture.detectChanges();
      deCards = fixture.debugElement.queryAll(By.css('.card'));
      expect(deCards.length).toBe(3, 'three blog items');

      deImgAlt = deCards[0].query(By.css('img'));
      expect(deImgAlt.nativeElement.getAttribute('alt')).toBe('girs', 'girs - alt of image');

      deDescription = deCards[0].query(By.css('.card-text'));
      expect(deDescription.nativeElement.textContent).toContain('Ellie Turner and Jobe Harris', 'description text');

      // done();
    // });


  });
});



@Component({
  template: `
    <surf-section-blog *ngIf="postData" [postData]="postData"></surf-section-blog>
  `
})
class TestComponent implements OnInit {
  postData: PostItem[] = allBlogData;

  constructor() {

  }

  ngOnInit() { }
}
