import { Component,
         OnInit,
         OnDestroy,
         AfterViewInit,
         AfterViewChecked,
         ViewChildren,
         ContentChildren,
         QueryList,
         Inject,
         Input } from '@angular/core';
import { Observable ,  Subscription } from 'rxjs';
import { ResizeService } from '../../core/services/resize.service';
import { WINDOW } from '../../core/services/window-ref.service';

// import { ChildHeightDirective } from '../../shared/currentHeight.directive';

import { BoardData, Dimention, BoardImage, TabsetDescription, TabsetImages, ActivatedTab, Tabset } from '../board-data';
import { BoardService } from '../board.service';

import { NgbTabset, NgbTabTitle, NgbTabContent, NgbTab, NgbTabChangeEvent } from '@ng-bootstrap/ng-bootstrap';
// import { NgbTabset, NgbTabTitle, NgbTabContent, NgbTab, NgbTabChangeEvent } from '@ng-bootstrap/ng-bootstrap/tabset/tabset';

@Component({
  selector: 'surf-section-boards',
  templateUrl: './surf-section-boards.component.html',
  styleUrls: ['./surf-section-boards.component.sass']
})
export class SurfSectionBoardsComponent implements OnInit, OnDestroy {

  currentOrientation = 'vertical';
  currentJustify = 'center';
  private resizeSubscription: Subscription;
  private _fetchDataSubscription: Subscription;

  @Input() boardsData: BoardData[];
  boardsId: string[];

  // activeTabId: string = 'tab-00000';

  // @ViewChild(ChildHeightDirective) viewChildHeightDirective: ChildHeightDirective;

  constructor(private boardService: BoardService,
              private resizeService: ResizeService,
              @Inject(WINDOW) private winRef: Window) { }

  ngOnInit() {
    // this.getBoardsData();

    this.resizeSubscription = this.resizeService.onResize$
      .subscribe(size => this.setCurrentOrientation(size.outerWidth) );

    this.setCurrentOrientation( this.winRef.outerWidth );
  }


  ngOnDestroy() {
    if (this.resizeSubscription) {
      this.resizeSubscription.unsubscribe();
    }
    // this._fetchDataSubscription.unsubscribe();
  }


  getBoardsData() {
    this._fetchDataSubscription = this.boardService.getBoardsData().subscribe(data => this.boardsData = data);
  }

  public setCurrentOrientation(width: number ) {
    if (width <= 767 ) {
      this.currentOrientation = 'horizontal';
    } else {
      this.currentOrientation = 'vertical';
    }
  }

  collectActivatedTabs(slideId: string, tabsetId: string, tabChangeObj: any) {
    this.boardService.collectActivatedTabs(slideId, tabsetId, tabChangeObj);
  }

}
