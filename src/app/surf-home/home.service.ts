import { Injectable } from '@angular/core';
import { AjaxApiService } from '../core/services/ajax-api.service';
import { ManageTransferStateService } from '../core/services/manage-transfer-state.service';
import { BoardData } from './board-data';
import { TeamData } from './surf-section-team/team-data';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  boardsToken = 'boards-';
  teamToken = 'home-team-';

  constructor(private ajaxApiService: AjaxApiService,
              private managerTransferState: ManageTransferStateService) { }

  getBoardsData(quant?: number) {
    const getBoardsStub = () => {
      return this.ajaxApiService.getBoardsData(quant);
    };

    return this.managerTransferState.getRequestedData<BoardData[]>(this.boardsToken, getBoardsStub);
  }

  getTeamData(quant?: number) {
    const getTeam = () => {
      return this.ajaxApiService.getTeamData(quant);
    };

    return this.managerTransferState.getRequestedData<TeamData[]>(this.teamToken, getTeam);
  }

  getPostsData(quant?: number) {
    return this.ajaxApiService.getPosts(quant);
  }
}
