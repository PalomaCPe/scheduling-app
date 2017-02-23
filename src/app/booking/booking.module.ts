import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//ROTA
import { RouterModule, Router } from '@angular/router';

import { BookingComponent } from './booking.component';
import { BookingService } from './booking.service';

import { BookingService } from './booking.service';

@NgModule({
    imports: [BrowserModule,
<<<<<<< HEAD
    // ROTA
    RouterModule.forChild([
        { path: 'bookings', component: BookingComponent}
    ])],
    declarations: [ BookingComponent ],
    providers: [ BookingService ]
=======
        // ROTA
        RouterModule.forChild([
            { path: 'bookings', component: BookingComponent }
        ])],
    declarations: [BookingComponent],
    providers: [BookingService]
>>>>>>> 91341de90d015ad237bff7c876a77b3d097711f8
})

export class BookingModule { }