import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientFinancialComponent } from './patient-financial.component';

describe('PatientFinancialComponent', () => {
  let component: PatientFinancialComponent;
  let fixture: ComponentFixture<PatientFinancialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientFinancialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientFinancialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
