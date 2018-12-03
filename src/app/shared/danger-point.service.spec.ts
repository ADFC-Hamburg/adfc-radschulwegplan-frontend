import { TestBed, inject } from '@angular/core/testing';

import { DangerPointService } from './danger-point.service';
import { MapPositionService } from '../main-map/map-position.service';

describe('DangerPointService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
       providers: [DangerPointService, MapPositionService]
    });
  });

  it('should be created', inject([DangerPointService], (service: DangerPointService) => {
    expect(service).toBeTruthy();
  }));
});
