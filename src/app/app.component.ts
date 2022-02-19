import { Component } from "@angular/core";
import { CompactType, GridsterConfig, GridsterItem, GridType } from 'angular-gridster2';

@Component({
  selector: "amds-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  options: GridsterConfig;
  items: Array<GridsterItem>;
  
  isInitPatient = true;
  isPatientLoading = false;
  isInitRespParty = true;
  isInitInsurance = true;
  isInitCareTeam = true;
  isInitReferral = true;
  isInitMarketing = true;


  constructor() {
    this.options = {
      gridType: GridType.Fixed,
      compactType: CompactType.CompactLeftAndUp,
      fixedColWidth: 360,
      fixedRowHeight: 30,
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
      {cols: 1, rows: 8, y: 0, x: 0},
      {cols: 1, rows: 2, y: 0, x: 0},
      {cols: 1, rows: 2, y: 0, x: 0},
      {cols: 1, rows: 2, y: 0, x: 0},
      {cols: 1, rows: 2, y: 0, x: 0},
      {cols: 1, rows: 2, y: 0, x: 0},
    ];

    this.initFramework();
  }

  test(): void {
    console.log("THIS IS A TEST");
  }

  // simulate initial load
  initFramework(): void {
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
    }, this.getRandomTimeoutValue());

    setTimeout(() => {
      this.isInitInsurance = false;
    }, this.getRandomTimeoutValue());

    setTimeout(() => {
      this.isInitCareTeam = false;
    }, this.getRandomTimeoutValue());

    setTimeout(() => {
      this.isInitReferral = false;
    }, this.getRandomTimeoutValue());

    setTimeout(() => {
      this.isInitMarketing = false;
    }, this.getRandomTimeoutValue());
  }

  getRandomTimeoutValue(): number {
    const min: number = Math.ceil(1000);
    const max: number = Math.floor(6000);
    return Math.floor(Math.random() * (max - min) + min); // the maximum is exclusive and the minimum is inclusive
  }

}