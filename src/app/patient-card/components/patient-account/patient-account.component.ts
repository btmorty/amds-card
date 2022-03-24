import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'amds-patient-account',
  templateUrl: './patient-account.component.html',
  styleUrls: ['./patient-account.component.scss']
})
export class PatientAccountComponent implements OnInit {
  @Input() isExpanded = false;

  constructor() { }

  ngOnInit(): void {
  }

}
