import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatTooltipModule } from "@angular/material/tooltip";
import {
  AmdsCard,
  AmdsCardActions,
  AmdsCardContent,
  AmdsCardHeader,
  AmdsCardSubtitle,
  AmdsCardTitle,
  AmdsCardButton,
} from "./card";

@NgModule({
  imports: [
    CommonModule,
    MatTooltipModule
  ],
  exports: [
    AmdsCard,
    AmdsCardHeader,
    AmdsCardContent,
    AmdsCardTitle,
    AmdsCardSubtitle,
    AmdsCardActions,
    AmdsCardButton,
  ],
  declarations: [
    AmdsCard,
    AmdsCardHeader,
    AmdsCardContent,
    AmdsCardTitle,
    AmdsCardSubtitle,
    AmdsCardActions,
    AmdsCardButton,
  ],
})
export class AmdsCardModule { }