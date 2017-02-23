import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//ROTA
import { RouterModule, Router } from '@angular/router';

import { BookingComponent } from './booking.component';
import { BookingDetailComponent } from './booking-detail.component';
import { BookingService } from './booking.service';

import { PercentualPipe } from '../shared/percentualPipe';


@NgModule({
    imports: [BrowserModule,
        // ROTA
        RouterModule.forChild([
            { path: 'bookings', component: BookingComponent },
            { path: 'bookings/:id', component: BookingDetailComponent }
        ])],
    declarations: [BookingComponent, BookingDetailComponent, PercentualPipe],
    providers: [BookingService]
})

export class BookingModule { }