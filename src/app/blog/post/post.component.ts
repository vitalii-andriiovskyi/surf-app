import { Component, OnInit, OnDestroy } from '@angular/core';
import { PostItem } from './post';
import { ActivatedRoute, Router } from '@angular/router';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'surf-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.sass'],
  animations: [
    trigger('postState', [
      state('disappear', style({
        opacity: 0
      })),
      state('appear', style({
        opacity: 1
      })),
      transition('disappear => appear', animate('500ms ease-out')),
      transition('appear => disappear', animate('500ms ease-in')),
      transition('void => initAppear', [
        style({opacity: 1}),
        animate(500)
      ]),
    ]),
  ]
})
export class PostComponent implements OnInit, OnDestroy {

  post: PostItem;
  postStateProp = 'initAppear';

  constructor(private route: ActivatedRoute,
              private titleService: Title,
              private meta: Meta) { }

  ngOnInit() {
    this.readRouteData();
    this.setTitle(this.post.title);
    this.setMeta(this.post);
  }

  ngOnDestroy() {
    this.postStateProp = 'initAppear';
  }

  readRouteData() {
    this.route.data
      .subscribe((data: {post: PostItem}) => {
        if (this.postStateProp === 'initAppear') {
          this.post = data.post;
          this.postStateProp = 'appear';

        } else if (this.postStateProp === 'appear') {
          this.postStateProp = 'disappear';

          setTimeout(() => {
            this.post = data.post;
            this.postStateProp = 'appear';
            this.setTitle(this.post.title);
            this.setMeta(this.post);
          }, 500);
        }
      });
  }

  public setTitle( newTitle: string) {
    this.titleService.setTitle( newTitle );
  }

  public setMeta(data) {
    this.meta.addTags([
      { name: 'surfapp:title', content: `SurfApp - ${data.title}` },
      { name: 'surfapp:site', content: 'SurfApp - @test' }
      // ...
    ]);
  }

}
