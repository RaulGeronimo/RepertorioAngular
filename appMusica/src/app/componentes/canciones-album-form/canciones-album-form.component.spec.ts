import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancionesAlbumFormComponent } from './canciones-album-form.component';

describe('CancionesAlbumFormComponent', () => {
  let component: CancionesAlbumFormComponent;
  let fixture: ComponentFixture<CancionesAlbumFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CancionesAlbumFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CancionesAlbumFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
