import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import {
  AmdsCardComponent,
  AmdsCardActionsDirective,
  AmdsCardContentDirective,
} from "./card";
import { AmdsCardButtonComponent } from "./card-button";

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
    AmdsCardComponent,
    AmdsCardContentDirective,
    AmdsCardActionsDirective,
    AmdsCardButtonComponent,
  ],
  declarations: [
    AmdsCardComponent,
    AmdsCardContentDirective,
    AmdsCardActionsDirective,
    AmdsCardButtonComponent,
  ],
})
export class AmdsCardModule { }