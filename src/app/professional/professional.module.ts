import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule, Router } from '@angular/router';
import { ProfessionalComponent } from './professional.component';

@NgModule({
    imports: [ BrowserModule, RouterModule.forChild([ 
        { path: 'professionals', component: ProfessionalComponent }
        ])],
    declarations: [ ProfessionalComponent], 
})

export class ProfessionalModule { }