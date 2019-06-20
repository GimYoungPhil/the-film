import { TestBed } from '@angular/core/testing';

import { DirectorDetailService } from './director-detail.service';

describe('DirectorDetailService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DirectorDetailService = TestBed.get(DirectorDetailService);
    expect(service).toBeTruthy();
  });
});
