import { Injectable, Inject, Optional } from '@angular/core';

import { Observable ,  of ,  BehaviorSubject } from 'rxjs';

import { catchError, map, tap } from 'rxjs/operators';
import { MenuItem } from '../app/core/menu-item';

@Injectable()
export class MenuStubService {
  public menuItems: MenuItem[];

  private _subject = new BehaviorSubject(this.menuItems);
  menuItemsOb = this._subject.asObservable();

  get testMenuItems() {
    return this.menuItems;
  }

  set testMenuItems(menuItems: MenuItem[]) {
    this._subject.next(menuItems);
  }

  getMenuItems() {
    return this.menuItemsOb;
  }


}
