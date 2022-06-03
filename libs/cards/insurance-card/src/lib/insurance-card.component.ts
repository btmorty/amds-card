import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'amds-insurance-card',
  templateUrl: './insurance-card.component.html',
  styleUrls: ['./insurance-card.component.scss']
})
export class InsuranceCardComponent {
  @Input() isInitializing = true;
  @Input() isInitialState = true;
  @Input()
  rows!: number;

}
