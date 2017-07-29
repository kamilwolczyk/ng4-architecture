import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgSemanticModule } from "ng-semantic";

import { IntroductionComponent } from './introduction/introduction.component';

@NgModule({
  imports: [
    CommonModule,
    NgSemanticModule
  ],
  declarations: [
    IntroductionComponent
  ]
})
export class HomeModule { }
