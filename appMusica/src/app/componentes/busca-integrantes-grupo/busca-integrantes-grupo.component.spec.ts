import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscaIntegrantesGrupoComponent } from './busca-integrantes-grupo.component';

describe('BuscaIntegrantesGrupoComponent', () => {
  let component: BuscaIntegrantesGrupoComponent;
  let fixture: ComponentFixture<BuscaIntegrantesGrupoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscaIntegrantesGrupoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscaIntegrantesGrupoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
