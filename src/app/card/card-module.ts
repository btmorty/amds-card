import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import {
  AmdsCardComponent,
  AmdsCardActionsDirective,
  AmdsCardContentDirective,
} from "./card";
import { AmdsCardButtonComponent } from "./card-button";
import { NgScrollbarModule } from "ngx-scrollbar";

@NgModule({
  imports: [
    CommonModule,
    MatProgressBarModule,
    NgScrollbarModule
  ],
  exports: [
    AmdsCardComponent,
    AmdsCardContentDirective,
    AmdsCardActionsDirective,
    AmdsCardButtonComponent
  ],
  declarations: [
    AmdsCardComponent,
    AmdsCardContentDirective,
    AmdsCardActionsDirective,
    AmdsCardButtonComponent,
  ],
})
export class AmdsCardModule { }