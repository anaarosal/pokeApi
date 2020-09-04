import { TestBed } from '@angular/core/testing';

import { SpokeapiService } from './spokeapi.service';

describe('SpokeapiService', () => {
  let service: SpokeapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpokeapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
