import { Component, OnInit } from '@angular/core';
import { Booking } from './booking';
import { BOOKINGS } from '../shared/mock';
import { BookingService } from './booking.service';

@Component({
    moduleId: module.id,
    selector: 'ava-bok-app' ,
    templateUrl: 'booking.html'
})

export class BookingComponent implements OnInit{
    constructor(
        private _bookingService: BookingService
        ){}
        
        pageName: string = "Alocações";
        bookings: Booking[];

        ngOnInit(){
            this._bookingService.getBookings()
                .then((result: Booking[]) =>{
                    this.bookings = result;        
                });

        }
   
    //bookings: Booking[] = this._bookingService.getBookings();
}