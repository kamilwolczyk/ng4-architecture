import { NgModule } from '@angular/core';
import { RouterModule, Route } from "@angular/router";
import { LayoutModule } from '../layout/layout.module';
import { HomeModule } from '../features/home/home.module';

import { IntroductionComponent } from "../features/home/introduction/introduction.component";
import { NotFoundComponent } from "../layout/error-pages/not-found/not-found.component";

const routes: Route[] = [
    { path: 'home', component: IntroductionComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    HomeModule,
    LayoutModule
  ],
  exports: [
    RouterModule,
    HomeModule,
    LayoutModule
  ]
})
export class RoutingModule { }
