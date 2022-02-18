import { Component, OnInit } from "@angular/core";
import { DragulaService } from "ng2-dragula";

@Component({
  selector: "amds-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  isInitPatient = true;
  isInitRespParty = true;
  isInitInsurance = true;
  isInitCareTeam = true;
  isInitReferrals = true;
  isInitMarketing = true;
  isPatientLoading = false;


  constructor(private dragulaService: DragulaService) {
    this.dragulaService.createGroup("CARDS", {
      revertOnSpill: true,
      moves: (el, container, handle) => { return handle?.classList.contains("amds-icon-dragndrop") ?? false; }
    });

    this.initFramework();
  }

  test(): void {
    console.log("THIS IS A TEST");
  }

  initFramework(): void {
    this.isInitPatient = true;
    this.isInitRespParty = true;
    this.isInitInsurance = true;
    this.isInitCareTeam = true;
    this.isInitReferrals = true;
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
      this.isInitReferrals = false;
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

  onSavePatient(): void {
    this.isPatientLoading = true;

    setTimeout(() => {
      this.isPatientLoading = false;
    }, this.getRandomTimeoutValue());
  }

}