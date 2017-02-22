import { Component } from '@angular/core';

import { Booking } from './booking';

import { BookingService } from "./booking.service";


	@Component({
	moduleId: module.id,
	selector: 'booking' ,
	templateUrl: 'boooking.html'
})

export class BookingComponent {
    constructor(
		private _bookingService: BookingService
	){}

	propriedade: string = 'Alocações';
	bookings: Booking[] = this._bookingService.getBookings();
}
