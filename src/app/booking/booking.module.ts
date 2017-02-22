import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//ROTA
import { RouterModule, Router } from '@angular/router';

import { BookingComponent } from './booking.component';

@NgModule({
    imports: [BrowserModule,
    // ROTA
    RouterModule.forChild([
        { path: 'booking', component: BookingComponent}
    ])],
    declarations: [ BookingComponent ]
})

export class BookingModule { }
