 import { CommonModule } from "@angular/common";
import {NgModule} from "@angular/core";
 import {
   AmdsCard,
   AmdsCardActions,
   AmdsCardContent,
   AmdsCardHeader,
   AmdsCardSubtitle,
   AmdsCardTitle
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
     AmdsCardActions
   ],
   declarations: [
     AmdsCard,
     AmdsCardHeader,
     AmdsCardContent,
     AmdsCardTitle,
     AmdsCardSubtitle,
     AmdsCardActions
   ],
 })
 export class AmdsCardModule {}