import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { RouterModule, Router } from '@angular/router';

import { ProfessionalModule } from './professional/professional.module';

@NgModule({
    imports: [ BrowserModule,  RouterModule.forRoot([{ path: "", redirectTo: "/", pathMatch: "full" }]), ProfessionalModule ],
    declarations: [ AppComponent], 
    bootstrap: [ AppComponent]
})

export class AppModule { }