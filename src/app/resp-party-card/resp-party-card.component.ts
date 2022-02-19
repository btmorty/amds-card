import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'amds-resp-party-card',
  templateUrl: './resp-party-card.component.html',
  styleUrls: ['./resp-party-card.component.scss']
})
export class RespPartyCardComponent implements OnInit {
  @Input() isInitializing = true;
  @Input() rows: number;

  constructor() { }

  ngOnInit(): void {
  }

}
