import { TestBed, inject } from '@angular/core/testing';

import { BlogService } from './blog.service';
import { AjaxApiService } from '../core/services/ajax-api.service';
import { AjaxApiMockService } from '../core/services/ajax-api.mock.service';

describe('BlogService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        BlogService,
        { provide: AjaxApiService, useClass: AjaxApiMockService}
      ]
    });
  });

  it('should be created', inject([BlogService], (service: BlogService) => {
    expect(service).toBeTruthy();
  }));
});

