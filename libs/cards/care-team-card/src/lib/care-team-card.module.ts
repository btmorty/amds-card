import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from '@amds-patient/cards/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CareTeamCardComponent } from './care-team-card.component';

@NgModule({
  imports: [
    CommonModule,
    CardModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatTooltipModule
  ],
  exports: [
    CareTeamCardComponent
  ],
  declarations: [
    CareTeamCardComponent
  ],
})
export class CareTeamCardModule {}
