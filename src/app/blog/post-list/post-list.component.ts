import { Component, OnInit, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostItem } from '../post/post';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'surf-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.sass']
})
export class PostListComponent implements OnInit {
  posts: PostItem[];
  sumElement: HTMLElement;

  constructor(private route: ActivatedRoute,
              private el: ElementRef,
              private titleService: Title,
              private meta: Meta) { }

  ngOnInit() {
    this.route.data
      .subscribe((data: {posts: PostItem[]}) => {
        this.posts = data.posts;
        this.setTitle('SufApp - Blog');
        this.setMeta('Blog');
      });

  }

  public setTitle( newTitle: string) {
    this.titleService.setTitle( newTitle );
  }

  public setMeta(data) {
    this.meta.addTags([
      { name: 'surfapp:title', content: `SurfApp - ${data}` },
      { name: 'surfapp:site', content: 'SurfApp - @test' }
      // ...
    ]);
  }
}


