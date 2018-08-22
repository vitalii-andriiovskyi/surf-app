import { Injectable, Inject, Optional } from '@angular/core';

import { Observable ,  of ,  BehaviorSubject } from 'rxjs';

import { catchError, map, tap } from 'rxjs/operators';
import { BoardData, Dimention, BoardImage, TabsetDescription, TabsetImages, ActivatedTab, Tabset } from '../board-data';

@Injectable()
export class BoardStubService {
  public boardDatas: BoardData[] = [
    {
      id: 'jr-surfboards-the-donny-stoker-yellow-green',
      title: 'JR Surfboards The Donny Stoker Yellow/Green Rail Fade',
      date: '2017-05-25T00:00:00.000Z',
      votingStarsRange: '60%',
      votingStarsNumber: 52,
      tabset1: {
        tabseId: 'jrSurfboardsTheDonnyStokerYellowGreenImagesDescription',
        description: 'Easy to ride, care free surfing craft that\'s fun for everyone, paddles well, super fast down the line and\n ' +
                    ' great for any level of surfing depending on who rides it. The Donny Stoker,\n ' +
                    ' a rework on design from stokesys first ever pro model.\n ' +
                    ' A super easy to surf and fun board. The Donny Stoker is a board for total freesurfing expression.',
        features: 'The Donny\'s nose-to-tail single concave and tail shape combo makes it fast, \n ' +
                  'responsive and made to suit point breaks, hollow beachies and reef passes from 1-6 foot. \n ' +
                  'With a super-fast and lively rocker for silky smooth rail to rail transition which Dion is known for, \n ' +
                  'The Donny is a beautifully balanced super high performance short board, with rocker, rails, \n ' +
                  'concave and outline working simultaneously to create a responsive and drivey board with plenty of hold.',
        dimentions: [
          {
            size: '5\'7\"',
            width: '18 1/4\"',
            thickness: '2 1/8\"',
            volume: '22.40',
          },
          {
            size: '5\'8\"',
            width: '18 3/8\"',
            thickness: '2 3/16\"',
            volume: '23.50',
          },
          {
            size: '5\'9\"',
            width: '18 1/2\"',
            thickness: '2 1/4\"',
            volume: '24.60',
          },
          {
            size: '5\'10\"',
            width: '18 5/8\"',
            thickness: '2 1/4\"',
            volume: '25.30',
          },
          {
            size: '5\'11\"',
            width: '18 3/4\"',
            thickness: '2 5/16\"',
            volume: '26.40',
          },
          {
            size: '6\'0\"',
            width: '18 7/8\"',
            thickness: '2 3/8\"',
            volume: '27.50',
          },
          {
            size: '6\'1\"',
            width: '19\"',
            thickness: '2 3/8\"',
            volume: '28.20',
          },
          {
            size: '6\'2\"',
            width: '19 1/4\"',
            thickness: '2 7/16\"',
            volume: '29.60',
          },
          {
            size: '6\'3\"',
            width: '19 3/8\"',
            thickness: '2 1/2\"',
            volume: '31.00',
          },
          {
            size: '6\'4\"',
            width: '19 1/2\"',
            thickness: '2 9/16\"',
            volume: '32.40',
          },
          {
            size: '6\'5\"',
            width: '19 5/8\"',
            thickness: '2 5/8\"',
            volume: '34.00',
          }
        ],
      },
      price: '499.99',
      tabset2: {
        tabseId: 'jrSurfboardsTheDonnyStokerYellowGreenImages',
        images: [
          {
            bigImage: 'assets/img/board.png',
            smallImage: 'assets/img/board-small.png',
            alt: 'Board',
          },
          {
            bigImage: 'assets/img/board1.png',
            smallImage: 'assets/img/board-bottom.png',
            alt: 'Board Bottom',
          },
          {
            bigImage: 'assets/img/board2.png',
            smallImage: 'assets/img/board-front.png',
            alt: 'Board Front',
          },
        ]
      },
    },
    {
      id: 'jr-surfboards-the-donny-stoker-yellow',
      title: 'JR Surfboards The Donny Stoker Yellow',
      date: '2017-05-25T00:00:00.000Z',
      votingStarsRange: '60%',
      votingStarsNumber: 52,
      tabset1: {
        tabseId: 'jrSurfboardsTheDonnyStokerYellowDescription',
        description: 'Easy to ride, care free surfing craft that\'s fun for everyone, paddles well, super fast down the line and\n ' +
                    ' great for any level of surfing depending on who rides it. The Donny Stoker,\n ' +
                    ' a rework on design from stokesys first ever pro model.\n ' +
                    ' A super easy to surf and fun board. The Donny Stoker is a board for total freesurfing expression.',
        features: 'The Donny\'s nose-to-tail single concave and tail shape combo makes it fast, \n ' +
                  'responsive and made to suit point breaks, hollow beachies and reef passes from 1-6 foot. \n ' +
                  'With a super-fast and lively rocker for silky smooth rail to rail transition which Dion is known for, \n ' +
                  'The Donny is a beautifully balanced super high performance short board, with rocker, rails, \n ' +
                  'concave and outline working simultaneously to create a responsive and drivey board with plenty of hold.',
        dimentions: [
          {
            size: '5\'7\"',
            width: '18 1/4\"',
            thickness: '2 1/8\"',
            volume: '22.40',
          },
          {
            size: '5\'8\"',
            width: '18 3/8\"',
            thickness: '2 3/16\"',
            volume: '23.50',
          },
          {
            size: '5\'9\"',
            width: '18 1/2\"',
            thickness: '2 1/4\"',
            volume: '24.60',
          },
          {
            size: '5\'10\"',
            width: '18 5/8\"',
            thickness: '2 1/4\"',
            volume: '25.30',
          },
          {
            size: '5\'11\"',
            width: '18 3/4\"',
            thickness: '2 5/16\"',
            volume: '26.40',
          },
          {
            size: '6\'0\"',
            width: '18 7/8\"',
            thickness: '2 3/8\"',
            volume: '27.50',
          },
          {
            size: '6\'1\"',
            width: '19\"',
            thickness: '2 3/8\"',
            volume: '28.20',
          },
          {
            size: '6\'2\"',
            width: '19 1/4\"',
            thickness: '2 7/16\"',
            volume: '29.60',
          },
          {
            size: '6\'3\"',
            width: '19 3/8\"',
            thickness: '2 1/2\"',
            volume: '31.00',
          },
          {
            size: '6\'4\"',
            width: '19 1/2\"',
            thickness: '2 9/16\"',
            volume: '32.40',
          },
          {
            size: '6\'5\"',
            width: '19 5/8\"',
            thickness: '2 5/8\"',
            volume: '34.00',
          }
        ],
      },
      price: '499.99',
      tabset2: {
        tabseId: 'jrSurfboardsTheDonnyStokerYellowImages',
        images: [
          {
            bigImage: 'assets/img/board.png',
            smallImage: 'assets/img/board-small.png',
            alt: 'Board',
          },
          {
            bigImage: 'assets/img/board1.png',
            smallImage: 'assets/img/board-bottom.png',
            alt: 'Board Bottom',
          },
          {
            bigImage: 'assets/img/board2.png',
            smallImage: 'assets/img/board-front.png',
            alt: 'Board Front',
          },
        ]
      },
    }
  ];

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

  getBoardsData() {
    return this.boardDatasOb;
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
      activeSlide = this.activatedTabs.find((element) => element.slideId == slideId );
    }

    if (activeSlide) {
      const tabsetIndex = activeSlide.tabsets.findIndex((element) => element.id == tabsetId );

      if (tabsetIndex != -1) {
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
    const activeSlide = this.activatedTabs.find((element) => element.slideId == this.activatedSlideId );
    if (!activeSlide) { return this.activatedTabs[0].tabsets[0].tabChangeObj.nextId; }

    const currentTabset = activeSlide.tabsets.find((element) => element.id == tabsetId );
    const activeTabId = currentTabset && currentTabset.tabChangeObj.nextId;

    return activeTabId ? activeTabId : this.activatedTabs[0].tabsets[0].tabChangeObj.nextId;
  }

  setIdActivatedSlide(slideId) {
    this.activatedSlideId = slideId;
  }

}
