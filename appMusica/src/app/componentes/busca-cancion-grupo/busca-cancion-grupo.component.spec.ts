import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscaCancionGrupoComponent } from './busca-cancion-grupo.component';

describe('BuscaCancionGrupoComponent', () => {
  let component: BuscaCancionGrupoComponent;
  let fixture: ComponentFixture<BuscaCancionGrupoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscaCancionGrupoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscaCancionGrupoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
