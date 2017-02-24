import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { ProfessionalService } from '../professional/professional.services'
import { BookingService } from './booking.service';
import { ProjectService } from '../project/project.service';
import { Booking } from './booking'

@Component({
    
    moduleId: module.id,
    templateUrl: 'booking-detail.html'

})


export class BookingDetailComponent implements OnInit{
    constructor(
        private _route: ActivatedRoute, 
        private _bookingService: BookingService,
        private _project: ProjectService,
        private _professional: ProfessionalService
    ){}

    pageName: string = 'Alocação';
    id: number;
    booking: Booking;

    ngOnInit() {
        this.getBooking();
    }

    getBooking(){
        this._route.params.forEach((param: Params) => {
            this.id = param["id"];
        });

        this.booking = this._bookingService.getBooking(this.id);
        this.booking.project = this._project.getProject(this.booking.projectId);
        this.booking.professional = this._professional.getProfessional(this.booking.professionalId)

    }
}