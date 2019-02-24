import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BackgroundColorDirective } from './background-color.directive';
import { SharedModule } from './shared/shared.module';

import { PageHomeComponent } from './page-home/page-home.component';
import { PageContactComponent } from './page-contact/page-contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    BackgroundColorDirective,
    PageHomeComponent,
    PageContactComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
