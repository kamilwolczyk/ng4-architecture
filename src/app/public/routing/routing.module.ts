import { CountersModule } from '../features/counters/counters.module';
import { HolidayCounterComponent } from '../features/counters/holiday-counter/holiday-counter.component';
import { FinancesModule } from '../features/finances/finances.module';
import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { LayoutModule } from '../layout/layout.module';
import { HomeModule } from '../features/home/home.module';

import { IntroductionComponent } from '../features/home/introduction/introduction.component';
import { NotFoundComponent } from '../layout/error-pages/not-found/not-found.component';
import { CreditCalculatorComponent } from '../features/finances/credit-calculator/credit-calculator.component';

const routes: Route[] = [
  { path: 'home', component: IntroductionComponent },
  { path: 'calculator', component: CreditCalculatorComponent },
  { path: 'counters', component: HolidayCounterComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    HomeModule,
    LayoutModule,
    FinancesModule,
    CountersModule
  ],
  exports: [
    RouterModule,
    LayoutModule,
    HomeModule,
    FinancesModule,
    CountersModule
  ]
})
export class RoutingModule { }
