import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'amds-patient-address',
  templateUrl: './patient-address.component.html',
  styleUrls: ['./patient-address.component.scss']
})
export class PatientAddressComponent implements OnInit {
  @Input() isExpanded = false;

  constructor() { }

  ngOnInit(): void {
  }

}
