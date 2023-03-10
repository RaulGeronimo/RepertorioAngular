import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistaGrupoFormComponent } from './artista-grupo-form.component';

describe('ArtistaGrupoFormComponent', () => {
  let component: ArtistaGrupoFormComponent;
  let fixture: ComponentFixture<ArtistaGrupoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtistaGrupoFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtistaGrupoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
