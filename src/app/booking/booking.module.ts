import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BookingComponent } from './booking.component';
import { RouterModule } from '@angular/router';
import { BookingService } from './booking.service';
import { PercentualPipe } from '../shared/percentualPipe';

@NgModule({
    imports: [BrowserModule,
        // ROTA
        RouterModule.forChild([
            { path: 'bookings', component: BookingComponent }
        ])],
    declarations: [BookingComponent, PercentualPipe],
    providers: [BookingService]
})

export class BookingModule { }