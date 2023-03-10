import { TestBed } from '@angular/core/testing';

import { BuscaCancionGrupoService } from './busca-cancion-grupo.service';

describe('BuscaCancionGrupoService', () => {
  let service: BuscaCancionGrupoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BuscaCancionGrupoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
