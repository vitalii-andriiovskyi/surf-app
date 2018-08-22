import {
  Component,
  Input,
  ContentChildren,
  QueryList,
  Directive,
  TemplateRef,
  ContentChild,
  AfterContentChecked,
  Output,
  EventEmitter,
  OnInit,
  AfterContentInit
} from '@angular/core';

import { NgbTabsetConfig } from '@ng-bootstrap/ng-bootstrap';
// import { NgbTabsetConfig } from '@ng-bootstrap/ng-bootstrap/tabset/tabset-config';
import { NgbTabset, NgbTabTitle, NgbTabContent, NgbTab, NgbTabChangeEvent } from '@ng-bootstrap/ng-bootstrap';
// import { NgbTabset, NgbTabTitle, NgbTabContent, NgbTab, NgbTabChangeEvent } from '@ng-bootstrap/ng-bootstrap/tabset/tabset';
import { BoardService } from '../board.service';

let nextId = 0;

@Component({
  selector: 'ngb-tabset-grided',
  exportAs: 'ngbTabsetGrided',
  template: `
    <div class="row">
    <div class="col-md-10">
      <div class="tab-content">
        <ng-template ngFor let-tab [ngForOf]="tabs">
          <div
            class="text-center tab-pane {{tab.id === activeId ? 'active' : null}}"
            *ngIf="!destroyOnHide || tab.id === activeId"
            role="tabpanel"
            [attr.aria-labelledby]="tab.id" id="{{tab.id}}-panel"
            [attr.aria-expanded]="tab.id === activeId">
            <ng-template [ngTemplateOutlet]="tab.contentTpl.templateRef"></ng-template>
          </div>
        </ng-template>
      </div>
    </div> <!-- /.col-md-10 -->
    <div class="col-md-2 d-flex align-items-center">
      <ul [class]="'nav nav-' + type + (orientation == 'horizontal'?  ' ' + justifyClass : ' flex-column')" role="tablist">
        <li class="nav-item" *ngFor="let tab of tabs">
          <a [id]="tab.id" class="nav-link" [class.active]="tab.id === activeId" [class.disabled]="tab.disabled"
            href (click)="!!select(tab.id)" role="tab" [attr.tabindex]="(tab.disabled ? '-1': undefined)"
            [attr.aria-controls]="(!destroyOnHide || tab.id === activeId ? tab.id + '-panel' : null)"
            [attr.aria-expanded]="tab.id === activeId" [attr.aria-disabled]="tab.disabled">
            {{tab.title}}<ng-template [ngTemplateOutlet]="tab.titleTpl?.templateRef"></ng-template>
          </a>
        </li>
      </ul>
    </div> <!-- /.col-md-2 -->
    </div>
  `
})
export class NgbTabsetGridedComponent extends NgbTabset implements OnInit, AfterContentInit {
  // @ContentChildren(NgbTab) tabs: QueryList<NgbTab>;

  // id of tabset
  @Input() id: string;

  constructor(private boardService: BoardService,
              config: NgbTabsetConfig) {
    super(config);
  }

  ngOnInit() { }

   ngAfterContentInit() {
    this.select( this.boardService.getSlideActivatedTab(this.id) );
   }


 }
