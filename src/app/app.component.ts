import { Component } from "@angular/core";

@Component({
  selector: "amds-root",
  templateUrl: "./app.component.html",
})
export class AppComponent {

  isInitPatient = true;
  isInitRespParty = true;
  isInitInsurance = true;
  isInitCareTeam = true;
  isInitReferrals = true;
  isInitMarketing = true;
  isLoading = true;

  constructor() {
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

  test(): void {
    console.log("THIS IS A TEST");
  }

  getRandomTimeoutValue(): number {
    const min: number = Math.ceil(1000);
    const max: number = Math.floor(6000);
    return Math.floor(Math.random() * (max - min) + min); // the maximum is exclusive and the minimum is inclusive
  }

}