import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http'

import { Booking } from './booking';
import { BOOKINGS } from '../shared/mock';

const SERVICE_URL: string = '/api/booking';

@Injectable()
export class BookingService {

    constructor(
        private _httpService: Http
    ) { }

    getBookings(): Promise<Booking[]> {
        let url: string = `${SERVICE_URL}/list`;
        console.log(url);
        return this._httpService.get(url).toPromise().then((response: Response) => {
            return response.json() as Booking[];
        });
    }

    /* <-- MOCK -->
     getBookings(): Booking[] {
        return BOOKINGS;
    }
    */

    getBooking(id: number): Booking {
        return BOOKINGS.find(b => b.id == id);
    }
}