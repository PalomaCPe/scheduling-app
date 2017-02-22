import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BookingComponent } from './booking.component';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [BrowserModule,
    // ROTA
    RouterModule.forChild([
        { path: 'bookings', component: BookingComponent}
    ])],
    declarations: [ BookingComponent ]
})

export class BookingModule {  }