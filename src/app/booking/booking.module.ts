import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//ROTA
import { RouterModule, Router } from '@angular/router';

import { BookingComponent } from './booking.component';

import { BookingService } from './bookings.services';

import { PercentualPipe } from '../shared/percentual';

import { BookingDetailComponent} from './booking.detail.componet';

@NgModule({
    imports: [BrowserModule,
    // ROTA
    RouterModule.forChild([
        { path: 'booking', component: BookingComponent},
        { path: 'booking/:id', component: BookingDetailComponent}
    ])],
    declarations: [ BookingComponent, BookingDetailComponent, PercentualPipe ],
    providers: [ BookingService ]
})

export class BookingModule { }
