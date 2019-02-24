import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BackgroundColorDirective } from './background-color.directive';
import { SharedModule } from './shared/shared.module';
import { MoviesService } from './logic/movies.service';

import { PageHomeComponent } from './page-home/page-home.component';
import { PageContactComponent } from './page-contact/page-contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { VideoListComponent } from './logic/components/video-list/video-list.component';
import { VideoListItemComponent } from './logic/components/video-list-item/video-list-item.component';


@NgModule({
    declarations: [
        AppComponent,
        BackgroundColorDirective,
        PageHomeComponent,
        PageContactComponent,
        PageNotFoundComponent,
        VideoListComponent,
        VideoListItemComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        SharedModule,
        HttpClientModule,
    ],
    providers: [
        MoviesService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
