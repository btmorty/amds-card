import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from "@angular/material/input";
import { MatMenuModule } from '@angular/material/menu';
import { MatRadioModule } from "@angular/material/radio";
import { MatSelectModule } from "@angular/material/select";
import { MatTooltipModule } from "@angular/material/tooltip";
import { AmdsCardModule } from '../card';
import { PatientCardComponent } from './patient-card.component';

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
    MatRadioModule
  ],
  exports: [
    PatientCardComponent
  ],
  declarations: [
    PatientCardComponent
  ],
})
export class AmdsPatientCardModule { }