import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'amds-patient-identity',
  templateUrl: './patient-identity.component.html',
  styleUrls: ['./patient-identity.component.scss']
})
export class PatientIdentityComponent implements OnInit {
  @Input() isExpanded = false;

  maxDate = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
