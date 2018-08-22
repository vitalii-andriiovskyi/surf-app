import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { PostItem } from '../../blog/post/post';
import { BoardData } from '../../surf-home/board-data';
import { TeamData } from '../../surf-home/surf-section-team/team-data';
import { postList, boardData, teamData } from './ajax-api.mock-data';

@Injectable()
export class AjaxApiMockService {
  constructor() {}

  public getPosts(quant?: number): Observable<PostItem[]> {
    return of(postList);
  }

  public getPost(postId: string): Observable<PostItem> {
    return of(postList[0]);
  }

  public getBoardsData(quant?: number): Observable<BoardData[]> {
    return of(boardData);
  }

  public getTeamData(quant?: number): Observable<TeamData[]> {
    return of(teamData);
  }

}


