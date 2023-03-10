import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistaGrupoListComponent } from './artista-grupo-list.component';

describe('ArtistaGrupoListComponent', () => {
  let component: ArtistaGrupoListComponent;
  let fixture: ComponentFixture<ArtistaGrupoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtistaGrupoListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtistaGrupoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
