import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'amds-patient-financial',
  templateUrl: './patient-financial.component.html',
  styleUrls: ['./patient-financial.component.scss']
})
export class PatientFinancialComponent implements OnInit {
  @Input() isExpanded = false;

  constructor() { }

  ngOnInit(): void {
  }

}
