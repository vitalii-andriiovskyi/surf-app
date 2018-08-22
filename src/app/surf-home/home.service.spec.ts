import { TestBed, inject } from '@angular/core/testing';

import { HomeService } from './home.service';
import { AjaxApiService } from '../core/services/ajax-api.service';
import { AjaxApiMockService } from '../core/services/ajax-api.mock.service';

describe('HomeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        HomeService,
        { provide: AjaxApiService, useClass: AjaxApiMockService}
      ]
    });
  });

  it('should be created', inject([HomeService], (service: HomeService) => {
    expect(service).toBeTruthy();
  }));
});
