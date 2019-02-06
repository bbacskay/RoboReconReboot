import { TestBed } from '@angular/core/testing';

import { ScoutDataService } from './scout-data.service';

describe('ScoutDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ScoutDataService = TestBed.get(ScoutDataService);
    expect(service).toBeTruthy();
  });
});
