import { TestBed } from '@angular/core/testing';

import { ManagerValidatorService } from './manager-validator.service';

describe('ManagerValidatorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ManagerValidatorService = TestBed.get(ManagerValidatorService);
    expect(service).toBeTruthy();
  });
});
