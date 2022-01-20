import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import {
  AmdsCard,
  AmdsCardActions,
  AmdsCardContent,
  AmdsCardHeader,
  AmdsCardSubtitle,
  AmdsCardTitle,
  AmdsCardButton,
  HoverColorDirective
} from "./card";

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    AmdsCard,
    AmdsCardHeader,
    AmdsCardContent,
    AmdsCardTitle,
    AmdsCardSubtitle,
    AmdsCardActions,
    AmdsCardButton,
    HoverColorDirective
  ],
  declarations: [
    AmdsCard,
    AmdsCardHeader,
    AmdsCardContent,
    AmdsCardTitle,
    AmdsCardSubtitle,
    AmdsCardActions,
    AmdsCardButton,
    HoverColorDirective
  ],
})
export class AmdsCardModule { }