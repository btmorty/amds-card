import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'amds-marketing-card',
  templateUrl: './marketing-card.component.html',
  styleUrls: ['./marketing-card.component.scss']
})
export class MarketingCardComponent implements OnInit {
  @Input() isInitializing = true;
  @Input() isInitialState = true;
  @Input() rows: number;

  constructor() { }

  ngOnInit(): void {
  }

}
