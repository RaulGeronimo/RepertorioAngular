import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GruposFormComponent } from './grupos-form.component';

describe('GruposFormComponent', () => {
  let component: GruposFormComponent;
  let fixture: ComponentFixture<GruposFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GruposFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GruposFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
