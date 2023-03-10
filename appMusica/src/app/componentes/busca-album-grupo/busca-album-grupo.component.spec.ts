import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscaAlbumGrupoComponent } from './busca-album-grupo.component';

describe('BuscaAlbumGrupoComponent', () => {
  let component: BuscaAlbumGrupoComponent;
  let fixture: ComponentFixture<BuscaAlbumGrupoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscaAlbumGrupoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscaAlbumGrupoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
