import { Component, Input } from '@angular/core';

@Component({
  selector: 'amds-care-team-card',
  templateUrl: './care-team-card.component.html',
  styleUrls: ['./care-team-card.component.scss']
})
export class CareTeamCardComponent {
  @Input() isInitializing = true;
  @Input() isInitialState = true;
  @Input()
  rows!: number;

}
