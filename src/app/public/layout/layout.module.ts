import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MdToolbarModule, MdMenuModule } from '@angular/material';

import { AppCommonModule } from '../../app-common/app-common.module';

import { NotFoundComponent } from './error-pages/not-found/not-found.component';
import { AccessDeniedComponent } from './error-pages/access-denied/access-denied.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ContentComponent } from './content/content.component';

@NgModule({
  imports: [
    RouterModule,
    AppCommonModule,
    MdToolbarModule,
    MdMenuModule
  ],
  exports: [
    AccessDeniedComponent,
    NotFoundComponent,
    HeaderComponent,
    FooterComponent,
    NavigationComponent,
    ContentComponent
  ],
  declarations: [
    AccessDeniedComponent,
    NotFoundComponent,
    HeaderComponent,
    FooterComponent,
    NavigationComponent,
    ContentComponent
  ]
})
export class LayoutModule { }
