import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RoutingModule } from './routing/routing.module';
import { LayoutModule } from './layout/layout.module';
import { MainComponent } from './main/main.component';


@NgModule({
  declarations: [
    MainComponent,
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    LayoutModule,
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class PublicModule { }
