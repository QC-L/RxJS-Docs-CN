import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdToolbarModule, MdSidenavModule, MdIconModule, MdButtonModule, MdListModule } from '@angular/material';
import { RouterModule, PreloadAllModules } from '@angular/router';

import { RXJS_DOC_ROUTES } from './app.routing';

import { AppComponent } from './app.component';
import { CompaniesComponent } from './companies/companies.component';
import { TeamComponent } from './team/team.component';
import { RxjsComponent } from './rxjs/rxjs.component';

@NgModule({
  declarations: [
    AppComponent,
    CompaniesComponent,
    TeamComponent,
    RxjsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(RXJS_DOC_ROUTES, { preloadingStrategy: PreloadAllModules }),
    MdToolbarModule,
    MdSidenavModule,
    MdIconModule,
    MdButtonModule,
    MdListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
