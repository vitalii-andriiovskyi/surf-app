import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

import { Observable ,  Subscription } from 'rxjs';

import { MenuService } from '../core/services/menu.service';
import { ResizeService } from '../core/services/resize.service';
import { WINDOW } from '../core/services/window-ref.service';


import { MenuItem } from '../core/models/menu-item';

@Component({
  selector: 'surf-topmenu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.sass'],
  animations: [
    trigger('collapseInOut', [
      state('collapsed', style({height: 0})),
      state('shown', style({height: '*'})),
      transition('shown => collapsed', [
        // style({height: '*'}),
        animate(350)
      ]),
      transition('collapsed => shown', [
        // style({height: 0}),
        animate(350)
      ]),
    ])
  ]
})
export class TopMenuComponent implements OnInit, OnDestroy {
  public isCollapsed = false;
  private resizeSubscription: Subscription;
  menuItems: Observable<MenuItem[]>;
  collapseState = 'collapsed';
  // menuItems: MenuItem[];

  constructor(private menuService: MenuService,
              private resizeService: ResizeService,
              @Inject(WINDOW) private winRef: Window ) { }

  ngOnInit() {
    this.menuItems = this.menuService.getMenuItems();
    // this.menuService.getMenuItems().subscribe(menuItemss => this.menuItems = menuItemss);
    this.resizeSubscription = this.resizeService.onResize$
      .subscribe(size => this.setIsCollapsed(size.outerWidth) );

    this.setIsCollapsed(this.winRef.outerWidth);
  }

  ngOnDestroy() {
    if (this.resizeSubscription) {
      this.resizeSubscription.unsubscribe();
    }
  }

  public setIsCollapsed(width: number ) {
    if (width <= 992 ) {
      this.isCollapsed = true;
      this.collapseState = 'collapsed';
    } else {
      this.isCollapsed = false;
      this.collapseState = 'shown';
    }
  }

  setCollapsed() {
    if (this.winRef.outerWidth > 992) { return; }
    const collapsed = !this.isCollapsed;
    if (collapsed) {
      this.collapseState = 'collapsed';
      setTimeout(() => {
        this.isCollapsed = collapsed;
      }, 350);
    } else {
      this.collapseState = 'shown';
      this.isCollapsed = collapsed;
    }
  }

}
