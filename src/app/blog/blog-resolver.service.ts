

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router, Resolve, RouterStateSnapshot,
         ActivatedRouteSnapshot } from '@angular/router';

import { BlogService } from './blog.service';
import { PostItem } from './post/post';
import { take, map } from 'rxjs/operators';
import { ManageTransferStateService } from '../core/services/manage-transfer-state.service';

@Injectable()
export class BlogResolver implements Resolve<PostItem[]> {
  constructor(private bs: BlogService,
              private router: Router,
              private managerTranferState: ManageTransferStateService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<PostItem[]> {

    return this.managerTranferState.getRequestedData<PostItem[]>('blog-posts', this.getPosts);
  }

  getPosts = () => {
    return this.bs.getPosts()
      .pipe(
        take(1),
        map(posts => {
          if (posts) {
            return posts;
          } else { // id not found
            this.router.navigate(['']);
            return null;
          }
        })
      );
  }
}
