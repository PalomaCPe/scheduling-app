import { Component } from '@angular/core';
import { Booking } from './booking';
import { BOOKINGS } from '../shared/mock';
import { BookingService } from './booking.service';

@Component({
    moduleId: module.id,
    selector: 'ava-bok-app' ,
    templateUrl: 'booking.html'
})

export class BookingComponent {
    constructor(
        private _bookingService: BookingService
        ){}
   
    pageName: string = "Alocações";
    bookings: Booking[] = this._bookingService.getBookings();
}