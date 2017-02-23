import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// ROTA
import { RouterModule, Router } from '@angular/router';

import { AppComponent } from './app.component';

import { BookingModule } from './booking/booking.module';
import { CustomerModule } from './customer/customer.module';
import { ProfessionalModule } from './professional/professional.module';
import { ProjectModule } from './project/project.module';
import { RoleModule } from './role/role.module';

@NgModule({
    imports: [ BrowserModule,  RouterModule.forRoot([{ path: "", redirectTo: "/", pathMatch: "full" }]), 
               ProfessionalModule, ProjectModule, BookingModule, RoleModule, CustomerModule ],
    declarations: [ AppComponent], 
    bootstrap: [ AppComponent]
})

export class AppModule { }