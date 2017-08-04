import { TestBed, inject } from '@angular/core/testing';

import { NumberExtensionsService } from './number-extensions.service';

describe('NumberExtensionsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NumberExtensionsService]
    });
  });

  it('should be created', inject([NumberExtensionsService], (service: NumberExtensionsService) => {
    expect(service).toBeTruthy();
  }));
});
