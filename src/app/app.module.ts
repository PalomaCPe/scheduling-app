import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// ROTA
import { RouterModule, Router } from '@angular/router';

import { AppComponent } from './app.component';
import { BookingModule } from './booking/booking.module';

import { ProfessionalModule } from './professional/professional.module';
import { ProjectModule } from './project/project.module';

@NgModule({
    imports: [ BrowserModule,  RouterModule.forRoot([{ path: "", redirectTo: "/", pathMatch: "full" }]), ProfessionalModule, ProjectModule ],
    declarations: [ AppComponent], 
    bootstrap: [ AppComponent]

export class AppModule { }