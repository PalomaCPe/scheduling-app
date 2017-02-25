import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Booking } from './booking'; 
import { BOOKINGS } from '../shared/mock';

const SERVICE_URL: string = 'api/booking';

@Injectable()
export class BookingService{
    constructor(
        private _httpService: Http
    ){}

    getBookings(): Promise<Booking[]>{
        let url: string = `${SERVICE_URL}/list`;

        return this._httpService.get(url)
            .toPromise()
            .then((response: Response) => {
                return response.json() as Booking[];
            });

    }

    getBooking(id: number): Booking{
         return BOOKINGS.find(r => r.id == id);
    }
}