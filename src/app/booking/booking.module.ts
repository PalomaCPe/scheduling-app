import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule, Router } from '@angular/router';

import { BookingComponent } from './booking.component';

@NgModule({
    imports: [ BrowserModule,
    RouterModule.forChild([{path: 'bookings', component: BookingComponent}]) ],
    declarations: [ BookingComponent ]
})

export class BookingModule { }