import { TestBed, inject } from '@angular/core/testing';

import { ScrollPageService } from './scroll-page.service';

describe('ScrollPageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ScrollPageService]
    });
  });

  it('should be created', inject([ScrollPageService], (service: ScrollPageService) => {
    expect(service).toBeTruthy();
  }));
});
