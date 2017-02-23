import { Component } from '@angular/core';
import { Booking } from './booking';
import { BOOKINGS } from '../shared/mocks';

import { BookingService } from './booking.service';

@Component({
    moduleId: module.id,
    selector: 'ava-booking' ,
    templateUrl: 'booking.html'
})

export class BookingComponent
{    
    constructor(private _bookingService: BookingService)
    {
        
    }
    project: string = "";
    propriedade: string = "";

    bookings: Booking[] = this._bookingService.getBookings();
}