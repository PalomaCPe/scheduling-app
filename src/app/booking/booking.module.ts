import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//ROTA
import { RouterModule, Router } from '@angular/router';

import { BookingComponent } from './booking.component';
import { BookingDetailComponent } from './booking-detail.component';
import { BookingService } from './booking.service';
import { ProjectService } from '../project/project.service';
import { ProfessionalService } from '../professional/professional.service';

import { PercentualPipe } from '../shared/percentualPipe';

import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [BrowserModule, FormsModule,
        // ROTA
        RouterModule.forChild([
            { path: 'bookings', component: BookingComponent },
            { path: 'bookings/:id', component: BookingDetailComponent }
        ])],
    declarations: [BookingComponent, BookingDetailComponent, PercentualPipe],
    providers: [BookingService, ProjectService, ProfessionalService]
})

export class BookingModule { }