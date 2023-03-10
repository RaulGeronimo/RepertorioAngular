import { TestBed } from '@angular/core/testing';

import { BuscaCancionAlbumService } from './busca-cancion-album.service';

describe('BuscaCancionAlbumService', () => {
  let service: BuscaCancionAlbumService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BuscaCancionAlbumService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
