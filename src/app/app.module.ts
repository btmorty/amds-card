import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { MaterialExampleModule } from "../material.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatNativeDateModule } from "@angular/material/core";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from "./app.component";
import { AmdsCardModule } from "./card";
import { CommonModule } from "@angular/common";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatMenuModule } from "@angular/material/menu";
import { AmdsPatientCardModule } from './patient-card/patient-card.module';
import { AmdsInsuranceCardModule } from './insurance-card/insurance-card.module';
import { AmdsCareTeamCardModule } from './care-team-card/care-team-card.module';
import { AmdsRespPartyCardModule } from './resp-party-card/resp-party-card.module';
import { AmdsReferralCardModule } from './referral-card/referral-card.module';
import { AmdsMarketingCardModule } from './marketing-card/marketing-card.module';
import { GridsterModule } from 'angular-gridster2';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    MaterialExampleModule,
    ReactiveFormsModule,
    AmdsPatientCardModule,
    AmdsRespPartyCardModule,
    AmdsInsuranceCardModule,
    AmdsCareTeamCardModule,
    AmdsReferralCardModule,
    AmdsMarketingCardModule,
    MatTooltipModule,
    MatMenuModule,
    GridsterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
