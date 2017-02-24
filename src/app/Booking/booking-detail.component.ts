import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { BookingService } from './booking.service';
import { ProjectService } from '../project/project.service';
import { ProfessionalService } from '../professional/professional.service';
import { Booking } from './booking';
import { Project } from '../project/project';
import { Professional } from '../professional/professional';

@Component({
    moduleId: module.id,
    templateUrl: 'booking-detail.html'
})

export class BookingDetailComponent implements OnInit {
    constructor(
        private _route: ActivatedRoute,
        private _bookingService: BookingService,
        private _projectService: ProjectService,
        private _professionalService: ProfessionalService) { }

    pageName: string = "Detalhes da Alocação";
    id: number;
    booking: Booking;
    projects: Project[]; 
    professionals: Professional[]; 

    getBooking() {
        this._route.params.forEach((param: Params) => { this.id = param["id"] });

        this.booking = this._bookingService.getBooking(this.id);
        this.projects = this._projectService.getProject();
        this.professionals = this._professionalService.getProfessional();
    }

    ngOnInit()
    {
        this.getBooking();
    }
}