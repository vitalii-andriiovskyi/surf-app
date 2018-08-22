import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';

import { PostListComponent } from './post-list/post-list.component';
import { PostComponent } from './post/post.component';
import { BlogItemResolver } from './blog-item-resolver.service';
import { BlogResolver } from './blog-resolver.service';

const surfBlogRoutes: Routes = [
  {
    path: 'blog',
    component: PostListComponent,
    resolve: {
      posts: BlogResolver
    }
  },
  {
    path: 'blog/:id',
    component: PostComponent,
    resolve: {
      post: BlogItemResolver
    }
  }
  // { path: 'superhero/:id', component: HeroDetailComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(
      surfBlogRoutes
    )
  ],
  exports: [
    RouterModule
  ],
  providers: [
    BlogItemResolver,
    BlogResolver
  ]
})
export class BlogRoutingModule { }
