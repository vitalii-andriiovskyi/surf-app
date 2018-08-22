import { Component, OnInit, OnDestroy, Input } from '@angular/core';

import { Subscription ,  Observable ,  of } from 'rxjs';
import { catchError, startWith } from 'rxjs/operators';
import { PostItem } from '../../blog/post/post';

@Component({
  selector: 'surf-section-blog',
  templateUrl: './surf-section-blog.component.html',
  styleUrls: ['./surf-section-blog.component.sass']
})
export class SurfSectionBlogComponent implements OnInit, OnDestroy {
  @Input() postData: PostItem[];

  constructor() { }

  ngOnInit() {}

  ngOnDestroy() {
    // this.dataFetchSubscription.unsubscribe();
  }


}
