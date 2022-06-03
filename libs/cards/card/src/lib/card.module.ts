import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import {
  CardComponent,
  CardActionsDirective,
  CardContentDirective,
} from "./card";
import { CardButtonComponent } from "./card-button";
import { NgScrollbarModule } from "ngx-scrollbar";
import { MatProgressBarModule } from "@angular/material/progress-bar"

@NgModule({
  imports: [
    CommonModule,
    NgScrollbarModule,
    MatProgressBarModule
  ],
  exports: [
    CardComponent,
    CardContentDirective,
    CardActionsDirective,
    CardButtonComponent
  ],
  declarations: [
    CardComponent,
    CardContentDirective,
    CardActionsDirective,
    CardButtonComponent,
  ],
})
export class CardModule { }