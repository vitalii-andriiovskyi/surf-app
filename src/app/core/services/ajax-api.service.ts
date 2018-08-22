import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Logger } from './logger.service';

import { PostItem } from '../../blog/post/post';
import {  BoardData,
          Dimention,
          BoardImage,
          TabsetDescription,
          TabsetImages,
          ActivatedTab,
          Tabset } from '../../surf-home/board-data';

import { TeamData } from '../../surf-home/surf-section-team/team-data';
import { boardData, teamData, postsData } from '../../surf-home/home-default-data';

const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class AjaxApiService {

  constructor(private http: HttpClient, private logger: Logger) { }

  getPosts(quant?: number): Observable<PostItem[]> {
    return this.getData<PostItem[]>('/api/posts', 'getPosts', null, quant);
    // return this.http.get<PostItem[]>(API_URL + '/posts')
    //         .pipe(
    //           catchError(this.handleError<PostItem[]>('getPosts', null))
    //         );
  }

  // getPostsHome(): Observable<PostItem[]> {
  //   return this.getData<PostItem[]>('/posts-home', 'getPostsHome', null);
  //   // return this.http.get<PostItem[]>(API_URL + '/posts')
  //   //         .pipe(
  //   //           catchError(this.handleError<PostItem[]>('getPosts', null))
  //   //         );
  // }

  getPost(postId: string): Observable<PostItem> {
    return this.getData<PostItem>( `/api/post/${postId}`, 'getPost', null);
    // return this.http.get<PostItem>(API_URL + '/post/' + postId)
    //         .pipe(
    //           catchError(this.handleError<PostItem>('getPost', null))
    //         );
  }

  getBoardsData(quant?: number): Observable<BoardData[]> {
    return this.getData<BoardData[]>('/api/boards', 'getBoardsData', null, quant);
  }

  getTeamData(quant?: number): Observable<TeamData[]> {
    return this.getData<TeamData[]>('/api/teamHome', 'getTeamData', null, quant);
  }

  private getData<T>(uri: string, methodName: string, defaultData: T, quant?: number): Observable<T> {
    const options = quant ? { params: new HttpParams().set('quantity', `${quant}`) } : {};

    return this.http.get<T>(API_URL + uri, options)
    .pipe(
      catchError(this.handleError<T>(methodName, defaultData))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: HttpErrorResponse): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      const message = (error.error instanceof ErrorEvent) ?
        error.error.message :
       `server returned code ${error.status} with body "${error.error}"`;

      // TODO: better job of transforming error for user consumption
      this.logger.log(`${operation} failed: ${message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
