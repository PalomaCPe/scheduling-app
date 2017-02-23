import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//ROTA
import { RouterModule, Router } from '@angular/router';

import { BookingComponent } from './booking.component';

import { BookingService } from './booking.service';

import { PercentualPipe } from '../shared/percentualPipe';

@NgModule({
    imports: [BrowserModule,
    // ROTA
    RouterModule.forChild([
        { path: 'bookings', component: BookingComponent}
    ])],
    declarations: [ BookingComponent, PercentualPipe ],
    providers: [ BookingService ]
})

export class BookingModule { }