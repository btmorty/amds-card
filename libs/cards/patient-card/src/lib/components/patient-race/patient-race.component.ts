import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'amds-patient-race',
  templateUrl: './patient-race.component.html',
  styleUrls: ['./patient-race.component.scss']
})
export class PatientRaceComponent implements OnInit {
  @Input() isExpanded = false;

  constructor() { }

  ngOnInit(): void {
  }

}
