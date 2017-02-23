import { Component } from '@angular/core';

import { Booking } from './booking';

import { BookingService } from './bookings.services';


	@Component({
	moduleId: module.id,
	selector: 'booking' ,
	templateUrl: 'boooking.html'
})

export class BookingComponent {

	constructor(
		private _bookingService: BookingService
	) {}

	pageNme: string = 'alocaçoes';
	bookings: Booking[] = this._bookingService.getBookings();

}
