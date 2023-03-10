import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancionesAlbumListComponent } from './canciones-album-list.component';

describe('CancionesAlbumListComponent', () => {
  let component: CancionesAlbumListComponent;
  let fixture: ComponentFixture<CancionesAlbumListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CancionesAlbumListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CancionesAlbumListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
