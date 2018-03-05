import { TestBed, inject } from '@angular/core/testing';

import { DangerPointService } from './danger-point.service';

describe('DangerPointService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DangerPointService]
    });
  });

  it('should be created', inject([DangerPointService], (service: DangerPointService) => {
    expect(service).toBeTruthy();
  }));
});
