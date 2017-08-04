import { TestBed, inject } from '@angular/core/testing';

import { DateExtensionsService } from './date-extensions.service';

describe('DateExtensionsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DateExtensionsService]
    });
  });

  it('should be created', inject([DateExtensionsService], (service: DateExtensionsService) => {
    expect(service).toBeTruthy();
  }));
});
