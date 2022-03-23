import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientGenderComponent } from './patient-gender.component';

describe('PatientGenderComponent', () => {
  let component: PatientGenderComponent;
  let fixture: ComponentFixture<PatientGenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientGenderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientGenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
