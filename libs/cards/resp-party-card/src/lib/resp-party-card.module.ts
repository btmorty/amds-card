import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RespPartyCardComponent } from './resp-party-card.component';
import { CardModule } from '@amds-patient/cards/card';

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
    RespPartyCardComponent
  ],
  declarations: [
    RespPartyCardComponent
  ],
})
export class RespPartyCardModule {}
