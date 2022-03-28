import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'amds-resp-party-card',
  templateUrl: './resp-party-card.component.html',
  styleUrls: ['./resp-party-card.component.scss']
})
export class RespPartyCardComponent {
  @Input() isInitialState = true;
  @Input() isInitializing = false;
  @Input() isSelected = false;
  @Input() rows: number;

  @Output() cardSelected = new EventEmitter<boolean>();

  constructor() { }

  onCardSelected() {
    this.cardSelected.emit(true);
  }

}
