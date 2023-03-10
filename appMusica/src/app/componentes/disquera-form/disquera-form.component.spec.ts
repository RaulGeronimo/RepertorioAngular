import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisqueraFormComponent } from './disquera-form.component';

describe('DisqueraFormComponent', () => {
  let component: DisqueraFormComponent;
  let fixture: ComponentFixture<DisqueraFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisqueraFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisqueraFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
