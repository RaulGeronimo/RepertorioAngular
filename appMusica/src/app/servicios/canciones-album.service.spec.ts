import { TestBed } from '@angular/core/testing';

import { CancionesAlbumService } from './canciones-album.service';

describe('CancionesAlbumService', () => {
  let service: CancionesAlbumService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CancionesAlbumService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
