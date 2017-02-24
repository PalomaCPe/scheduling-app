import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';

import { Professional } from '../professional/professional';
import { Project } from '../project/project';
import { Booking } from './booking';
import { BOOKINGS } from "../shared/mock";


@Injectable()
export class BookingService{
    getBookings(): Booking[]{
        return BOOKINGS;
    }

    getBooking(id: number): Booking{
        return BOOKINGS.find(r => r.id == id);
    }
} 