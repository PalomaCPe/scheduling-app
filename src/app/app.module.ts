import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// ROTA
import { RouterModule, Router } from '@angular/router';

import { BookingModule } from './booking/booking.module';
import {CustomerModule } from './customer/customer.module';
import {ProfessionalModule } from './professional/professional.module';
import {ProjectModule } from './project/project.module';
import {RoleModule } from './role/role.module';

import { AppComponent } from './app.component';

@NgModule({
    imports: [ BrowserModule, BookingModule, CustomerModule, ProfessionalModule, ProjectModule, RoleModule, 
    RouterModule.forRoot([{ path: '', redirectTo: "/", pathMatch:'full'}])],
    declarations: [ AppComponent ],
    bootstrap: [ AppComponent]
})

export class AppModule { }