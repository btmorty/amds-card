import { Component, Input } from '@angular/core';

@Component({
  selector: 'amds-referral-card',
  templateUrl: './referral-card.component.html',
  styleUrls: ['./referral-card.component.scss']
})
export class ReferralCardComponent {
  @Input() isInitializing = true;
  @Input() isInitialState = true;
  @Input()
  rows!: number;

}
