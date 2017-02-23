import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//ROTA
import { RouterModule, Router } from '@angular/router';

import { BookingComponent } from './booking.component';

import { BookingService } from './bookings.services';

@NgModule({
    imports: [BrowserModule,
    // ROTA
    RouterModule.forChild([
        { path: 'booking', component: BookingComponent}
    ])],
    declarations: [ BookingComponent ],
    providers: [ BookingService ]
})

export class BookingModule { }
