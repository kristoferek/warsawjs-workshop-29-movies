import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BackgroundColorDirective } from './background-color.directive';
import { SharedModule } from './shared/shared.module';
import { LogicModule } from './logic/logic.module';


@NgModule({
  declarations: [
    AppComponent,
    BackgroundColorDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    LogicModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
