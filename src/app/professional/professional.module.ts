import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Router } from '@angular/router';
import { ProfessionalComponent } from './professional.component';
import { ProfessionalService } from './professional.service'

@NgModule({
    imports: [BrowserModule,
        RouterModule.forChild([
            { path: 'professionals', component: ProfessionalComponent }
        ])],
    declarations: [ProfessionalComponent],
    providers: [ProfessionalService]
})

export class ProfessionalModule { }