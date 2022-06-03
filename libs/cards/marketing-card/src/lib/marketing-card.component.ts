import { Component, Input } from '@angular/core';

@Component({
  selector: 'amds-marketing-card',
  templateUrl: './marketing-card.component.html',
  styleUrls: ['./marketing-card.component.scss']
})
export class MarketingCardComponent {
  @Input() isInitializing = true;
  @Input() isInitialState = true;
  @Input()
  rows!: number;

}
