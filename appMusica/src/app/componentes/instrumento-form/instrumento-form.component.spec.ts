import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstrumentoFormComponent } from './instrumento-form.component';

describe('InstrumentoFormComponent', () => {
  let component: InstrumentoFormComponent;
  let fixture: ComponentFixture<InstrumentoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstrumentoFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstrumentoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
