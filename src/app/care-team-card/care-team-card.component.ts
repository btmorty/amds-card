import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'amds-care-team-card',
  templateUrl: './care-team-card.component.html',
  styleUrls: ['./care-team-card.component.scss']
})
export class CareTeamCardComponent implements OnInit {
  @Input() isInitializing = true;
  @Input() rows: number;
  
  constructor() { }

  ngOnInit(): void {
  }

}
