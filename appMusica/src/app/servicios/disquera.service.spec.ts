import { TestBed } from '@angular/core/testing';

import { DisqueraService } from './disquera.service';

describe('DisqueraService', () => {
  let service: DisqueraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DisqueraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
