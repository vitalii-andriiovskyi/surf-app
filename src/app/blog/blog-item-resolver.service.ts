import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router, Resolve, RouterStateSnapshot,
         ActivatedRouteSnapshot } from '@angular/router';

import { BlogService } from './blog.service';
import { PostItem } from './post/post';
import { take, map } from 'rxjs/operators';
import { ManageTransferStateService } from '../core/services/manage-transfer-state.service';

@Injectable()
export class BlogItemResolver implements Resolve<PostItem> {
  id: string;

  constructor(private bs: BlogService,
              private router: Router,
              private managerTransferState: ManageTransferStateService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<PostItem> {
    this.id = route.paramMap.get('id');

    return this.managerTransferState.getRequestedData<PostItem>(this.id, this.getPost);
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
