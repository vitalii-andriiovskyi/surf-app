import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router, Resolve, RouterStateSnapshot,
         ActivatedRouteSnapshot } from '@angular/router';

import { BlogService } from './blog.service';
import { PostItem } from './post/post';
import { take, map } from 'rxjs/operators';

@Injectable()
export class BlogItemResolver implements Resolve<PostItem> {
  id: string;

  constructor(private bs: BlogService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<PostItem> {
    this.id = route.paramMap.get('id');

    return this.bs.getPost(this.id)
      .pipe(
        take(1),
        map(post => {
          if (post) {
            return post;
          } else { // id not found
            this.router.navigate(['/blog']);
            return null;
          }
        })
      );
  }

  getPost = () => {
    return this.bs.getPost(this.id)
    .pipe(
      take(1),
      map(post => {
        if (post) {
          return post;
        } else { // id not found
          this.router.navigate(['/blog']);
          return null;
        }
      })
    );
  }
}
