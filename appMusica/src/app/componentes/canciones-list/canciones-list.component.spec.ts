import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancionesListComponent } from './canciones-list.component';

describe('CancionesListComponent', () => {
  let component: CancionesListComponent;
  let fixture: ComponentFixture<CancionesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CancionesListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CancionesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
