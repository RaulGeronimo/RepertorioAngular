import { TestBed } from '@angular/core/testing';

import { BuscaIntegrantesGrupoService } from './busca-integrantes-grupo.service';

describe('BuscaIntegrantesGrupoService', () => {
  let service: BuscaIntegrantesGrupoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BuscaIntegrantesGrupoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
