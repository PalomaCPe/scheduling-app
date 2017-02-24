import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule, Route } from '@angular/router';

import { ProfessionalComponent } from './professional.component';
import { ProfessionalService } from './professional.service';

@NgModule({
    imports: [ BrowserModule,RouterModule.forChild([{ path: 'professionals', component: ProfessionalComponent }])],
    exports: [],
    declarations: [ ProfessionalComponent ],
    bootstrap: [ ProfessionalComponent],
    providers: [ProfessionalService]
     
})

export class ProfessionalModule { }

