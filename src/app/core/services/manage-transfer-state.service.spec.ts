import { TestBed } from '@angular/core/testing';

import { ManageTransferStateService } from './manage-transfer-state.service';

describe('ManageTransferStateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ManageTransferStateService = TestBed.get(ManageTransferStateService);
    expect(service).toBeTruthy();
  });
});
