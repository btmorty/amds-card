import { Component } from '@angular/core';
import {
  CompactType,
  GridsterConfig,
  GridsterItem,
  GridType,
} from 'angular-gridster2';

@Component({
  selector: 'amds-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  options: GridsterConfig;
  items: Array<GridsterItem>;

  isInitialState = true;

  isInitPatient = false;
  isEmptyPatient = false;
  isPatientLoading = false;

  isInitRespParty = false;
  isEmptyRespParty = false;

  isInitInsurance = false;
  isEmptyInsurance = false;

  isInitCareTeam = false;
  isEmptyCareTeam = false;

  isInitReferral = false;
  isEmptyReferral = false;

  isInitMarketing = false;
  isEmptyMarketing = false;

  constructor() {
    this.options = {
      gridType: GridType.Fixed,
      compactType: CompactType.CompactLeftAndUp,
      fixedColWidth: 360,
      fixedRowHeight: 30,
      maxCols: 3,
      margin: 16,
      draggable: {
        enabled: true,
        ignoreContent: true,
        dragHandleClass: 'amds-card-drag-icon',
      },
      pushItems: true,
      resizable: {
        enabled: true,
      },
    };

    this.items = [
      { id: 'PAT', cols: 1, rows: 8, y: 0, x: 0, minItemRows: 8 },
      { id: 'RSP', cols: 1, rows: 8, y: 0, x: 0, minItemRows: 8 },
      { id: 'INS', cols: 1, rows: 4, y: 0, x: 0 },
      { id: 'CRT', cols: 1, rows: 4, y: 0, x: 0 },
      { id: 'REF', cols: 1, rows: 4, y: 0, x: 0 },
      { id: 'MRK', cols: 1, rows: 4, y: 0, x: 0 },
    ];
  }

  test(): void {
    console.log('THIS IS A TEST');
  }

  // simulate initial load
  selectPatient(): void {
    this.isInitialState = false;
    this.isInitPatient = true;
    this.isInitRespParty = true;
    this.isInitInsurance = true;
    this.isInitCareTeam = true;
    this.isInitReferral = true;
    this.isInitMarketing = true;

    setTimeout(() => {
      this.isInitPatient = false;
    }, this.getRandomTimeoutValue());

    setTimeout(() => {
      this.isInitRespParty = false;
      this.isEmptyRespParty = true;
    }, this.getRandomTimeoutValue());

    setTimeout(() => {
      this.isInitInsurance = false;
      this.isEmptyInsurance = true;
    }, this.getRandomTimeoutValue());

    setTimeout(() => {
      this.isInitCareTeam = false;
      this.isEmptyCareTeam = true;
    }, this.getRandomTimeoutValue());

    setTimeout(() => {
      this.isInitReferral = false;
      this.isEmptyReferral = true;
    }, this.getRandomTimeoutValue());

    setTimeout(() => {
      this.isInitMarketing = false;
      this.isEmptyMarketing = true;
    }, this.getRandomTimeoutValue());
  }

  deselectPatient(): void {
    this.isInitialState = true;
  }

  private getRandomTimeoutValue(): number {
    const min: number = Math.ceil(1000);
    const max: number = Math.floor(6000);
    return Math.floor(Math.random() * (max - min) + min); // the maximum is exclusive and the minimum is inclusive
  }
}
