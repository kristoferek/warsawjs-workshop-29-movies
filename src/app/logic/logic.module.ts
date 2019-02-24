import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { PageVideoListComponent } from './components/page-video-list/page-video-list.component';
import { PageVideoNotFoundComponent } from './components/page-video-not-found/page-video-not-found.component';
import { PageVideoProfileComponent } from './components/page-video-profile/page-video-profile.component';

import { LogicRoutingModule } from './logic-routing.module';

import { MoviesService } from './movies.service';
@NgModule({
    declarations: [
        PageVideoListComponent,
        PageVideoNotFoundComponent,
        PageVideoProfileComponent,
        PageVideoNotFoundComponent
    ],
    providers: [
        MoviesService
    ],
    imports: [
        LogicRoutingModule,
        CommonModule,
        HttpClientModule
    ],
    exports: [
        PageVideoListComponent,
        PageVideoNotFoundComponent,
        PageVideoProfileComponent
    ]
})
export class LogicModule { }
