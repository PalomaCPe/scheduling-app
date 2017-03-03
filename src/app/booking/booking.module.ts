import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BookingComponent } from './booking.component';
import { BookingDetailComponent } from './booking-detail.component';
import { BookingService } from './booking.service';
import { ProjectService } from '../project/project.service';
import { PercentualPipe } from '../shared/percentualPipe';

@NgModule({
    imports: [BrowserModule, FormsModule,
        // ROTA
        RouterModule.forChild([
            { path: 'bookings', component: BookingComponent },
            { path: 'booking/:action/:id', component: BookingDetailComponent }
        ])],
    declarations: [BookingComponent, PercentualPipe, BookingDetailComponent],
    providers: [BookingService, ProjectService]
})

export class BookingModule { }