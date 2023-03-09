import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistaListComponent } from './artista-list.component';

describe('ArtistaListComponent', () => {
  let component: ArtistaListComponent;
  let fixture: ComponentFixture<ArtistaListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtistaListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtistaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
