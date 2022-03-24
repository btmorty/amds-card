import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'amds-patient-contact',
  templateUrl: './patient-contact.component.html',
  styleUrls: ['./patient-contact.component.scss']
})
export class PatientContactComponent implements OnInit {
  @Input() isExpanded = false;

  constructor() { }

  ngOnInit(): void {
  }

}
