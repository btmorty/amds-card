import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { GridsterModule } from 'angular-gridster2';
import { PatientCardModule } from '@advancedmd/patient-card';
import { RespPartyCardModule } from '@advancedmd/patient-resp-party-card';
import { InsuranceCardModule } from '@advancedmd/patient-insurance-card';
import { CareTeamCardModule } from '@advancedmd/patient-care-team-card';
import { ReferralCardModule } from '@advancedmd/patient-referral-card';
import { MarketingCardModule } from '@advancedmd/patient-marketing-card';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    PatientCardModule,
    RespPartyCardModule,
    InsuranceCardModule,
    CareTeamCardModule,
    ReferralCardModule,
    MarketingCardModule,
    MatTooltipModule,
    MatButtonModule,
    MatMenuModule,
    GridsterModule,
    MatProgressBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
