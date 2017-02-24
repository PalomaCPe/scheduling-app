import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule, Route } from '@angular/router';

import { ProfessionalComponent } from './professional.component';
import { ProfessionalDetailComponent } from './professional-detail.component';
import { ProfessionalService } from './professional.service';

@NgModule({
    imports: [ BrowserModule,RouterModule.forChild([
                                                    { path: 'professionals', component: ProfessionalComponent },
                                                    { path: 'professionals/:id', component: ProfessionalDetailComponent }])],
    exports: [],
    declarations: [ ProfessionalComponent, ProfessionalDetailComponent ],
    bootstrap: [ ProfessionalComponent],
    providers: [ProfessionalService]
     
})

export class ProfessionalModule { }

