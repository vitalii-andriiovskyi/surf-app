import { Injectable } from '@angular/core';
import { AjaxApiService } from '../core/services/ajax-api.service';
import { ManageTransferStateService } from '../core/services/manage-transfer-state.service';
import { BoardData } from './board-data';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  boardsToken = 'boards-';

  constructor(private ajaxApiService: AjaxApiService,
              private managerTransferState: ManageTransferStateService) { }

  getBoardsData(quant?: number) {
    const getBoardsStub = () => {
      return this.ajaxApiService.getBoardsData(quant);
    };

    return this.managerTransferState.getRequestedData<BoardData[]>(this.boardsToken, getBoardsStub);
  }

  getTeamData(quant?: number) {
    return this.ajaxApiService.getTeamData(quant);
  }

  getPostsData(quant?: number) {
    return this.ajaxApiService.getPosts(quant);
  }
}
