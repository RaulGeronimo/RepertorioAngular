import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscaCancionAlbumComponent } from './busca-cancion-album.component';

describe('BuscaCancionAlbumComponent', () => {
  let component: BuscaCancionAlbumComponent;
  let fixture: ComponentFixture<BuscaCancionAlbumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscaCancionAlbumComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscaCancionAlbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
