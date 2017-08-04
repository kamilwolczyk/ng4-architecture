import { TestBed, inject } from '@angular/core/testing';

import { CreditCalculatorService } from './credit-calculator.service';

describe('CreditCalculatorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CreditCalculatorService]
    });
  });

  it('should be created', inject([CreditCalculatorService], (service: CreditCalculatorService) => {
    expect(service).toBeTruthy();
  }));
});
