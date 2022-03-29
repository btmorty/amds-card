import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AmdsCardModule } from '../card';
import { PatientCardComponent } from './patient-card.component';
import { PatientNameComponent } from './components/patient-name/patient-name.component';
import { PatientIdentityComponent } from './components/patient-identity/patient-identity.component';
import { PatientAccountComponent } from './components/patient-account/patient-account.component';
import {
  CardSectionComponent,
  SectionTitleDirective,
  SectionDetailDirective,
  SectionDetailItemComponent,
  SectionDetailLabelComponent,
  SectionDetailTextComponent,
  SectionContentDirective,
} from './components/card-section/card-section.component';
import { PatientAddressComponent } from './components/patient-address/patient-address.component';
import { PatientContactComponent } from './components/patient-contact/patient-contact.component';
import { PatientGenderComponent } from './components/patient-gender/patient-gender.component';
import { PatientRaceComponent } from './components/patient-race/patient-race.component';
import { PatientFinancialComponent } from './components/patient-financial/patient-financial.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  imports: [
    CommonModule,
    AmdsCardModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatTooltipModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatRadioModule,
    MatDatepickerModule,
    MatSnackBarModule
  ],
  exports: [PatientCardComponent],
  declarations: [
    PatientCardComponent,
    PatientNameComponent,
    PatientIdentityComponent,
    PatientAccountComponent,
    CardSectionComponent,
    SectionTitleDirective,
    SectionDetailDirective,
    SectionContentDirective,
    SectionDetailItemComponent,
    SectionDetailLabelComponent,
    SectionDetailTextComponent,
    PatientAddressComponent,
    PatientContactComponent,
    PatientGenderComponent,
    PatientRaceComponent,
    PatientFinancialComponent,
  ],
})
export class AmdsPatientCardModule {}
