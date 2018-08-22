import { Injectable } from '@angular/core';
import { Observable ,  of ,  BehaviorSubject } from 'rxjs';
import { PostItem } from './post/post';
import { map } from 'rxjs/operators';
import { AjaxApiService } from '../core/services/ajax-api.service';



@Injectable()
export class BlogService {

  // private _subject = new BehaviorSubject<PostItem[]>(postList);
  // boardDatasOb = this._subject.asObservable();

  constructor(private ajaxApi: AjaxApiService) { }

  getPosts() {
    return this.ajaxApi.getPosts();
    // return this._subject;
  }

  getPost(id: string) {
    return this.ajaxApi.getPost(id);
    // return this.getPosts().pipe(
    //   map(posts => posts.find(post => post.id === id))
    // );
  }

}


// const postList: PostItem[] = [
//   {
//     id: 'post-1',
//     title: 'Post 1',
//     date: '',
//     author: '****',
//     body: `<p>Tell that to the proud auto workers at a <a href="blog/post-2">Michigan</a> plant who, after they
//             found out it was closing, kept showing up every day and working as hard as ever,
//             because they knew there were people who counted on the brakes that they made.</p>`,
//     summary: '<p>Tell that to the proud auto workers at a</p>',
//     category: 'City',
//   },
//   {
//     id: 'post-2',
//     title: 'Post 2',
//     date: '',
//     author: '****',
//     body: `<p>It was closing, kept showing up every day and working as hard as ever,
//             because they knew there were people who counted on the brakes that they made.
//             Michigan plant who, after they found out it was closing
//              <a href="blog/post-1">Michigan</a> </p>
//              <p>This is YouTube video <a href="https://www.youtube.com/watch?v=hSu9BQEub4U">Philosophical Studies</a>`,
//     summary: '<p>Tell that to the proud auto workers at a</p>',
//     category: 'City',
//   }
// ];
