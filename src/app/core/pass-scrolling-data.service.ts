import { Injectable, Renderer2 } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable()
export class PassScrollingDataService {

  private _passerData = new Subject<any>();

  passerData = this._passerData.asObservable();

  constructor() { }

  passData(data: any) {
    this._passerData.next(data);
  }

  // get coords of element relating to any parent html DOM-element, but it don't take in to account html and body
  getCoords(elem?: HTMLElement, body?: HTMLElement) {
    // (1)
    const box = elem.getBoundingClientRect();
    // (2)
    const scrollTop: any = body.scrollTop;
    const scrollLeft: any = body.scrollLeft;
    // (3)
    const clientTop = body.clientTop || 0;
    const clientLeft = body.clientLeft || 0;
    // (4)
    const top = box.top + scrollTop - clientTop;
    const left = box.left + scrollLeft - clientLeft;

    return {
      top: top,
      left: left
    };
  }

}
