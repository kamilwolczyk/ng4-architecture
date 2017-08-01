import "hammerjs";

import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { MdSidenavModule } from "@angular/material";

import { AppCommonModule } from "../app-common/app-common.module";

import { RoutingModule } from "./routing/routing.module";
import { LayoutModule } from "./layout/layout.module";
import { MainComponent } from "./main/main.component";

@NgModule({
  declarations: [MainComponent],
  imports: [
    BrowserModule,
    AppCommonModule,
    RoutingModule,
    LayoutModule,
    MdSidenavModule
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class PublicModule {}
