import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { AmdsCardModule } from '../card';
import { RespPartyCardComponent } from './resp-party-card.component';

@NgModule({
  imports: [
    CommonModule,
    AmdsCardModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
  ],
  exports: [
    RespPartyCardComponent
  ],
  declarations: [
    RespPartyCardComponent
  ],
})
export class AmdsRespPartyCardModule { }