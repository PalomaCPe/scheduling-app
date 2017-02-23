import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Rota
import { RouterModule, Router } from '@angular/router';
import { BookingComponent } from './booking.component';
import { BookingService } from './booking.service';
import { PercentualPipe } from '../shared/percentualPipe';
import { BookingDetailComponent } from './booking-detail.component';

@NgModule({
    imports: [ BrowserModule, 
        RouterModule.forChild([
            { path:'bookings', component: BookingComponent},
            { path:'booking/:id', component: BookingDetailComponent}
    ])],
    declarations: [ BookingComponent, BookingDetailComponent,  PercentualPipe],
    providers:[ BookingService ]
    
})

export class BookingModule { }