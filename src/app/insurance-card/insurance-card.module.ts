import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from "@angular/material/tooltip";
import { AmdsCardModule } from '../card';
import { InsuranceCardComponent } from './insurance-card.component';

@NgModule({
  imports: [
    CommonModule,
    AmdsCardModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatTooltipModule
  ],
  exports: [
    InsuranceCardComponent
  ],
  declarations: [
    InsuranceCardComponent
  ],
})
export class AmdsInsuranceCardModule { }