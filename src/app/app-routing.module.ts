import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageHomeComponent } from './page-home/page-home.component';
import { PageContactComponent } from './page-contact/page-contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LogicModule } from './logic/logic.module';

const routes: Routes = [
    {
        path: '',
        component: PageHomeComponent
    },
    {
        path: 'contact',
        component: PageContactComponent
    },
    {
        path: 'movies',
        loadChildren: './logic/logic.module#LogicModule',
    },
    {
        path: '**',
        component: PageNotFoundComponent,
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {
        useHash: true
    })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
