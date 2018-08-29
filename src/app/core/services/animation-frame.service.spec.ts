import { TestBed, inject } from '@angular/core/testing';

import { AnimationFrameService } from './animation-frame.service';

describe('ScrollPageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AnimationFrameService]
    });
  });

  it('should be created', inject([AnimationFrameService], (service: AnimationFrameService) => {
    expect(service).toBeTruthy();
  }));
});
