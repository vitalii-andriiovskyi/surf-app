import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { ResizeService } from '../core/services/resize.service';
import { WINDOW } from '../core/services/window-ref.service';
import { BoardService } from './board.service';
import { Subscription } from 'rxjs';
import { BoardData } from './board-data';
import { TeamData } from './surf-section-team/team-data';
import { HomeService } from './home.service';
import { PostItem } from '../blog/post/post';

import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'surf-home',
  templateUrl: './surf-home.component.html',
  styleUrls: ['./surf-home.component.sass'],
  animations: [
    trigger('CollapseInOut', [
      state('in', style({height: 0})),
      transition('void => *', [
        style({height: '*'}),
        animate(350)
      ]),
      transition('* => void', [
        // style({height: 0}),
        animate(350, style({height: 0}))
      ]),
    ])
  ]
})
export class SurfHomeComponent implements OnInit, OnDestroy {
  private _fetchBoardDataSubscription: Subscription;
  private _fetchTeamDataSubscription: Subscription;
  private _fetchPostsSubscription: Subscription;

  boardsData: BoardData[];
  teamData: TeamData[];
  postData: PostItem[];

  constructor(private resizeService: ResizeService,
              @Inject(WINDOW) private winRef: Window,
              private homeService: HomeService) { }

  ngOnInit() {
    this.getBoardsData();
    this.getTeamData();
    this.getPosts(3);
  }

  ngOnDestroy() {
    this._fetchBoardDataSubscription.unsubscribe();
    this._fetchTeamDataSubscription.unsubscribe();
    this._fetchPostsSubscription.unsubscribe();
  }

  getBoardsData(quant?: number) {
    this._fetchBoardDataSubscription = this.homeService.getBoardsData(quant).subscribe(data => this.boardsData = data);
  }

  getTeamData(quant?: number) {
    this._fetchTeamDataSubscription = this.homeService.getTeamData(quant).subscribe(data => this.teamData = data);
  }

  getPosts(quant?: number) {
    this._fetchPostsSubscription = this.homeService.getPostsData(quant).subscribe(data => this.postData = data);
  }

}
