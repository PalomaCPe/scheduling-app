import { Component, OnInit } from '@angular/core';

import { Booking } from './booking';
import { BookingService } from './booking.service';

// import { BOOKINGS } from '../shared/mock'; <-- MOCK  2-->

@Component({
    moduleId: module.id,
    selector: 'ava-bok-app',
    templateUrl: 'booking.html'
})

export class BookingComponent implements OnInit {
    constructor(
        private _bookingService: BookingService
    ) { }

    propriedade: string = 'Página de alocações';
    bookings: Booking[];

    // bookings: Booking[] = this._bookingService.getBookings(); <-- MOCK 1 -->
    // bookings: Booking[] = BOOKINGS;                           <-- MOCK 2 -->

    ngOnInit() {
        this._bookingService.getBookings().then((result: Booking[]) => {
            this.bookings = result;
        });
    }

}
