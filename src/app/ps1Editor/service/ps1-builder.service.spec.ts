import { TestBed } from '@angular/core/testing';

import { Ps1BuilderService } from './ps1-builder.service';

describe('Ps1BuilderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Ps1BuilderService = TestBed.get(Ps1BuilderService);
    expect(service).toBeTruthy();
  });
});
