import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHomeComponent } from './components/page-home/page-home.component';
import { PageContactComponent } from './components/page-contact/page-contact.component';

@NgModule({
    declarations: [
        PageHomeComponent,
        PageContactComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        PageHomeComponent,
        PageContactComponent
    ]
})
export class LogicModule { }
