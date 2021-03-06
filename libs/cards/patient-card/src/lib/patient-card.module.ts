import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { PatientCardComponent } from './patient-card.component';
import { PatientNameComponent } from './components/patient-name/patient-name.component';
import { PatientIdentityComponent } from './components/patient-identity/patient-identity.component';
import { PatientAccountComponent } from './components/patient-account/patient-account.component';
import { PatientAddressComponent } from './components/patient-address/patient-address.component';
import { PatientContactComponent } from './components/patient-contact/patient-contact.component';
import { PatientGenderComponent } from './components/patient-gender/patient-gender.component';
import { PatientRaceComponent } from './components/patient-race/patient-race.component';
import { PatientFinancialComponent } from './components/patient-financial/patient-financial.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {
  CardSectionComponent,
  SectionTitleDirective,
  SectionDetailDirective,
  SectionContentDirective,
  SectionDetailItemComponent,
  SectionDetailLabelComponent,
  SectionDetailTextComponent,
  SectionActionsComponent,
} from './components/card-section/card-section.component';
import { CardModule } from '@amds-patient/cards/card';

@NgModule({
  imports: [
    CommonModule,
    CardModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatTooltipModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatSnackBarModule,
  ],
  exports: [
    PatientCardComponent,
    PatientNameComponent,
    PatientIdentityComponent,
    PatientAccountComponent,
    PatientAddressComponent,
    PatientContactComponent,
    PatientGenderComponent,
    PatientRaceComponent,
    PatientFinancialComponent,
  ],
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
    SectionActionsComponent,
    PatientAddressComponent,
    PatientContactComponent,
    PatientGenderComponent,
    PatientRaceComponent,
    PatientFinancialComponent,
  ],
})
export class PatientCardModule {}
