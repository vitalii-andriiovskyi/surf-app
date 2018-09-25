import { Injectable, Inject } from '@angular/core';
import {PLATFORM_ID} from '@angular/core';
import {isPlatformServer} from '@angular/common';
import {makeStateKey, TransferState} from '@angular/platform-browser';
import { of, Observable } from 'rxjs';
import { tap, first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ManageTransferStateService {

  constructor(@Inject(PLATFORM_ID) private platformId,
              private transferState: TransferState) { }

  getRequestedData<T>(dataToken: string, func: () => Observable<T>) {
    const DATA_KEY = makeStateKey<T>(dataToken);

    if (this.transferState.hasKey(DATA_KEY)) {
      const data = this.transferState.get<T>(DATA_KEY, null);
      this.transferState.remove(DATA_KEY);
      return of(data);
    } else {
      return func()
        .pipe(
          first(),
          tap(data => {
            if (isPlatformServer(this.platformId)) {
              this.transferState.set(DATA_KEY, data);
            }
          })
        );
    }
  }
}
