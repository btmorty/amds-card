import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'amds-patient-gender',
  templateUrl: './patient-gender.component.html',
  styleUrls: ['./patient-gender.component.scss']
})
export class PatientGenderComponent implements OnInit {
  @Input() isExpanded = false;

  constructor() { }

  ngOnInit(): void {
  }

}
