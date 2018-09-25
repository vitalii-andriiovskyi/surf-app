import { TestBed } from '@angular/core/testing';

import { ManageTransferStateService } from './manage-transfer-state.service';
import { BrowserTransferStateModule } from '@angular/platform-browser';

describe('ManageTransferStateService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ BrowserTransferStateModule ]
  }));

  it('should be created', () => {
    const service: ManageTransferStateService = TestBed.get(ManageTransferStateService);
    expect(service).toBeTruthy();
  });
});
