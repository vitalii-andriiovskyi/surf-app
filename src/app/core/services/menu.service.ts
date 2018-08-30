import { Injectable, Inject, Optional } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

import { catchError, map, tap } from 'rxjs/operators';
import { MenuItem } from '../menu-item';

@Injectable()
export class MenuService {
  public menuItems: MenuItem[] = [
    {href: '/boards', text: 'Boards'},
    {href: '/accessories', text: 'Accessories'},
    {href: '/blog', text: 'Blog'},
    {href: '/technology', text: 'Technology'},
    {href: '/team', text: 'Team'},
    {href: '/dealers', text: 'Dealers'},
  ];

  private _subject = new BehaviorSubject(this.menuItems);
  menuItemsOb = this._subject.asObservable();

  getMenuItems() {
    return this.menuItemsOb;
  }


}

