import { Injectable } from '@angular/core';
import { BOOKINGS } from '../shared/mocks';
import { Booking } from './booking';

@Injectable()
export class BookingService {

    getBookings(): Booking[] {
        return BOOKINGS;
    }

}