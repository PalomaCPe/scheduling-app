import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { BookingComponent } from './booking/booking.component';
import { RoleComponent } from './role/role.component';
import { ProfessionalComponent } from './professional/professional.component';
import { ProjectComponent } from './project/project.component';

@NgModule({
    imports: [ BrowserModule ],
    declarations: [ AppComponent, CustomerComponent, BookingComponent, RoleComponent, ProfessionalComponent, ProjectComponent], 
    bootstrap: [ AppComponent, CustomerComponent, BookingComponent, RoleComponent, ProfessionalComponent, ProjectComponent]
})

export class AppModule { }