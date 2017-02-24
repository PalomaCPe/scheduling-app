import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

// ROTA
import { RouterModule, Router } from '@angular/router';

import { BookingModule } from './booking/booking.module';
import { CustomerModule } from './customer/customer.module';
import { ProfessionalModule } from './professional/professional.module';
import { ProjectModule } from './project/project.module';
import { RoleModule } from './role/role.module';

// Consumir API
import { HttpModule } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@NgModule({
    imports: [ BrowserModule,  RouterModule.forRoot([{ path: "", redirectTo: "/", pathMatch: "full" }]), 
               ProfessionalModule, ProjectModule, BookingModule, RoleModule, CustomerModule, HttpModule ],
    declarations: [ AppComponent], 
    bootstrap: [ AppComponent]
})

export class AppModule { }