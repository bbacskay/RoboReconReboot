import { TestBed } from '@angular/core/testing';

import { MatchscoutingDataService } from './matchscouting-data.service';

describe('MatchscoutingDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MatchscoutingDataService = TestBed.get(MatchscoutingDataService);
    expect(service).toBeTruthy();
  });
});
