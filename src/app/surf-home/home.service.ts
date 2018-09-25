import { Injectable } from '@angular/core';
import { AjaxApiService } from '../core/services/ajax-api.service';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  boardsToken = 'boards-';

  constructor(private ajaxApiService: AjaxApiService) { }

  getBoardsData(quant?: number) {
    const getBoardsStub = () => {
      return this.ajaxApiService.getBoardsData(quant);
    };

    return this.ajaxApiService.getBoardsData(quant);
  }

  getTeamData(quant?: number) {
    return this.ajaxApiService.getTeamData(quant);
  }

  getPostsData(quant?: number) {
    return this.ajaxApiService.getPosts(quant);
  }
}
