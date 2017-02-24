import { Component, OnInit } from '@angular/core';
import { Booking } from './booking';
import { BookingService } from './booking.service';

@Component({
    moduleId: module.id,
    selector: 'ava-booking',
    templateUrl: 'booking.html'
})
export class BookingComponent implements OnInit {
    constructor(
        private _bookingService: BookingService
    ) { }

    project: string = "";
    propriedade: string = "";

    pageName: string = "Alocações";

    bookings: Booking[];

    ngOnInit() {
        this._bookingService.getBookings()
            .then((result: Booking[]) => {
                this.bookings = result;
            });
    }
}