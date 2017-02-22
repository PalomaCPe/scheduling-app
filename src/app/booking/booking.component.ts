import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'ava-app' ,
    templateUrl: 'boooking.html'
})

export class BookingComponent{ 
     id : number;
     start_date : Date;
     end_date : Date;
     booking_percentual : number;
     profissional : string;
     project : string;
       
}