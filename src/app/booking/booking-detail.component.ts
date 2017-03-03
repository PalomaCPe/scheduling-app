import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Booking } from './booking';
import { Project } from '../project/project';
import { BookingService } from './booking.service';
import { ProjectService } from '../project/project.service';

@Component({
    moduleId: module.id,
    templateUrl: 'booking-detail.html'
})

export class BookingDetailComponent implements OnInit {
    constructor(
        private _route: ActivatedRoute,
        private _bookingService: BookingService,
        private _projectService: ProjectService
    ) { }

    pageName: string = 'Alocação';
    projects: Project[] = this._projectService.getProject();

    id: number;
    booking: Booking;
    action: string;

    ngOnInit() {
        this._route.params.forEach((param: Params) => {
            this.action = param["action"]
        })

        if (this.action == 'detail')
            this.getBooking();
        else
            this.booking = new Booking();
    }

    getBooking() {
        this._route.params.forEach((param: Params) => {
            this.id = param["id"];
        });

        this._bookingService.getBooking(this.id).then((result: Booking) => {
            this.booking = result;
        });
    }
    onSave() {
        this._bookingService.createBooking(this.booking).then((result: Booking) => {
            this.booking = result;
        })
    }

}