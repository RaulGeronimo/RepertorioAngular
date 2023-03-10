import { TestBed } from '@angular/core/testing';

import { ArtistaGrupoService } from './artista-grupo.service';

describe('ArtistaGrupoService', () => {
  let service: ArtistaGrupoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArtistaGrupoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
