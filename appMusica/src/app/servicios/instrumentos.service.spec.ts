import { TestBed } from '@angular/core/testing';

import { InstrumentosService } from './instrumentos.service';

describe('InstrumentosService', () => {
  let service: InstrumentosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InstrumentosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
