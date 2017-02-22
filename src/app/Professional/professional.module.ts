import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule, Route } from '@angular/router';

import { ProfessionalComponent } from './professional.component';

@NgModule({
    imports: [ BrowserModule,
    RouterModule.forChild([
        { path: 'professionals', component: ProfessionalComponent }
    ])],
    declarations: [ ProfessionalComponent ],
    bootstrap: [ ProfessionalComponent]
})

export class ProfessionalModule { }