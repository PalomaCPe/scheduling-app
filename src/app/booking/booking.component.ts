import { Component } from '@angular/core';
import { Booking } from './booking';
import { BOOKINGS } from '../shared/mocks';

@Component({
    moduleId: module.id,
    selector: 'ava-booking' ,
    templateUrl: 'booking.html'
})

export class BookingComponent
{    
    project: string = "";
    propriedade: string = "";

    bookings: Booking[] = BOOKINGS;
}