import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    imports: [ BrowserModule ],
    declarations: [ AppComponent, CustomerComponent, BookingComponent, RoleComponent, ProfessionalComponent, ProjectComponent], 
    bootstrap: [ AppComponent, CustomerComponent, BookingComponent, RoleComponent, ProfessionalComponent, ProjectComponent]
})

export class CustomerModule { }