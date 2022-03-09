import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'amds-resp-party-card',
  templateUrl: './resp-party-card.component.html',
  styleUrls: ['./resp-party-card.component.scss']
})
export class RespPartyCardComponent implements OnInit {
  @Input() isInitialState = true;
  @Input() isInitializing = false;
  @Input() rows: number;

  constructor() { }

  ngOnInit(): void {
  }

}
