import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'amds-patient-name',
  templateUrl: './patient-name.component.html',
  styleUrls: ['./patient-name.component.scss']
})
export class PatientNameComponent implements OnInit {
  @Input() isExpanded = false;

  constructor() { }

  ngOnInit(): void {
  }

}
