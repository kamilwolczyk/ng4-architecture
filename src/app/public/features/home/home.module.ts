import { NgModule } from '@angular/core';

import { AppCommonModule } from '../../../app-common/app-common.module';
import { IntroductionComponent } from './introduction/introduction.component';

@NgModule({
  imports: [
    AppCommonModule
  ],
  declarations: [
    IntroductionComponent
  ]
})
export class HomeModule { }
