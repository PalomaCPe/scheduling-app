import { Component } from '@angular/core';
import { Booking } from './booking';
import { BookingService } from './booking.service';
// import { BOOKINGS } from '../shared/mock'; <-- MOCK -->

@Component({
    moduleId: module.id,
    selector: 'ava-bok-app',
    templateUrl: 'booking.html'
})

export class BookingComponent {
    constructor(
        private _bookingService: BookingService
    ) { }

    propriedade: string = 'Página de alocações';
    bookings: Booking[] = this._bookingService.getBookings();
    // bookings: Booking[] = BOOKINGS; <-- MOCK -->
}
