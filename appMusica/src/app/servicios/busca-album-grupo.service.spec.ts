import { TestBed } from '@angular/core/testing';

import { BuscaAlbumGrupoService } from './busca-album-grupo.service';

describe('BuscaAlbumGrupoService', () => {
  let service: BuscaAlbumGrupoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BuscaAlbumGrupoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
