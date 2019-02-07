import { TestBed } from '@angular/core/testing';

import { MatchDataService } from './match-data.service';

describe('MatchDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MatchDataService = TestBed.get(MatchDataService);
    expect(service).toBeTruthy();
  });
});
