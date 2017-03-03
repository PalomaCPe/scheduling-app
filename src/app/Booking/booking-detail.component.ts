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
    action: String;

    ngOnInit()
    {
        this._route.params.forEach((param: Params) => {
            this.action = param["action"]
        });

        if (this.action == "detail"){
            this.getBooking();
        }
        else if (this.action == "new"){
            this.booking = new Booking();
            this.projects = this._projectService.getProjects();
            this.professionals = this._professionalService.getProfessionals();
        }
    }

    getBooking() {
        this._route.params.forEach((param: Params) => { this.id = param["id"] });

        this._bookingService.getBooking(this.id)
            .then((result: Booking) => {
                this.booking = result;
            });
        this.projects = this._projectService.getProjects();
        this.professionals = this._professionalService.getProfessionals();
    }

    onSave(){
        this._bookingService.createBooking(this.booking)
            .then((result: Booking) => {
                this.booking = result;
                this.action = 'detail';
            })
            .catch(() => {console.log('Erro ao Salvar')});
    }

    startDateChanged(value: Date): void {
        this.booking.startDate = value;
    }

    endDateChanged(value: Date): void {
        this.booking.endDate = value;
    }
}