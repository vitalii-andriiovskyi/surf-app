import { TestBed, inject } from '@angular/core/testing';

import { PassScrollingDataService } from './pass-scrolling-data.service';

describe('PassScrollingDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PassScrollingDataService]
    });
  });

  it('should be created', inject([PassScrollingDataService], (service: PassScrollingDataService) => {
    expect(service).toBeTruthy();
  }));
});
