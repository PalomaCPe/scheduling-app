import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
<<<<<<< HEAD
//ROTA
import { RouterModule, Router } from '@angular/router';
=======
>>>>>>> 2c8e3d351184e9685549e8e476d0c08b1cfdbbed

import { BookingComponent } from './booking.component';

@NgModule({
<<<<<<< HEAD
    imports: [BrowserModule,
    // ROTA
    RouterModule.forChild([
        { path: 'bookings', component: BookingComponent}
    ])],
    declarations: [ BookingComponent ]
=======
    imports: [ BrowserModule ],
    declarations: [ BookingComponent ],
    bootstrap: [ BookingComponent]
>>>>>>> 2c8e3d351184e9685549e8e476d0c08b1cfdbbed
})

export class BookingModule { }