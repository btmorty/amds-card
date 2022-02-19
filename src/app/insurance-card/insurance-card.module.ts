import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { AmdsCardModule } from '../card';
import { InsuranceCardComponent } from './insurance-card.component';

@NgModule({
  imports: [
    CommonModule,
    AmdsCardModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
  ],
  exports: [
    InsuranceCardComponent
  ],
  declarations: [
    InsuranceCardComponent
  ],
})
export class AmdsInsuranceCardModule { }