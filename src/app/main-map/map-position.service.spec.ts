import { TestBed, inject } from '@angular/core/testing';

import { MapPositionService } from './map-position.service';

describe('MapPositionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MapPositionService]
    });
  });

  it('should be created', inject([MapPositionService], (service: MapPositionService) => {
    expect(service).toBeTruthy();
  }));
});
