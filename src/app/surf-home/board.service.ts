import { Injectable, Inject, Optional } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

import { catchError, map, tap } from 'rxjs/operators';
import { BoardData, Dimention, BoardImage, TabsetDescription, TabsetImages, ActivatedTab, Tabset } from './board-data';

import { boardData } from './home-default-data';
import { AjaxApiService } from '../core/services/ajax-api.service';

@Injectable()
export class BoardService {
  public boardDatas: BoardData[] = boardData;
  private _subject = new BehaviorSubject(this.boardDatas);
  boardDatasOb = this._subject.asObservable();

  // first element of array activatedTabs is faked because of that ts wasn't transpiled into js and there was error
  public activatedTabs: ActivatedTab[] = [{
    slideId: 'whoKnows',
    tabsets: [
      {
        id: 'tabset0',
        activeTabNumber: 0,
        tabChangeObj: {
           activeId: 'tab-000000',
           nextId: 'tab-next-00000',
        },
      }
    ]
  }];

  activatedSlideId: string;

  constructor(private ajaxApi: AjaxApiService) { }

  getBoardsData() {
    return this.ajaxApi.getBoardsData();
    // return this.boardDatasOb;
  }

    // export class ActivatedTab {
    //   slideId: string;
    //   tabsets: Tabset[];
    //  }

    // export class Tabset {
    //   id: string;
    //   tabChangeObj: {
    //     activeId: string;
    //     nextId: string;
    //   };
    // }

  // methods collectActivatedTabs(), getSlideActivatedTab() and setSlideActivatedTab() are needed for remembering
  // chosen tabs of every slide in order to show on slide chosen tabs after user returns to slide
  // without these methods we will allways see first tab being chosen in any case of changing slides
  collectActivatedTabs(slideId: string, tabsetId: string, tabChangeObj: any) {
    // slide which is shown in carousel
    let activeSlide: ActivatedTab;
    if (this.activatedTabs) {
      activeSlide = this.activatedTabs.find((element) => element.slideId === slideId );
    }

    if (activeSlide) {
      const tabsetIndex = activeSlide.tabsets.findIndex((element) => element.id === tabsetId );

      if (tabsetIndex !== -1) {
        activeSlide.tabsets[tabsetIndex].tabChangeObj = tabChangeObj;
      } else {
        const tabset: Tabset = {
          id: tabsetId,
          tabChangeObj: tabChangeObj
        };
        activeSlide.tabsets.push(tabset);
      }

    } else {
      const tabset: Tabset = {
        id: tabsetId,
        tabChangeObj: tabChangeObj
      };
      const tabsetsArray: Tabset[] = [tabset];
      this.activatedTabs.push({
          slideId: slideId,
          tabsets: tabsetsArray
      });
    }
  }


  getSlideActivatedTab(tabsetId: string) {
    const activeSlide = this.activatedTabs.find((element) => element.slideId === this.activatedSlideId );
    if (!activeSlide) { return this.activatedTabs[0].tabsets[0].tabChangeObj.nextId; }

    const currentTabset = activeSlide.tabsets.find((element) => element.id === tabsetId );
    const activeTabId = currentTabset && currentTabset.tabChangeObj.nextId;

    return activeTabId ? activeTabId : this.activatedTabs[0].tabsets[0].tabChangeObj.nextId;
  }

  setIdActivatedSlide(slideId) {
    this.activatedSlideId = slideId;
  }

}
