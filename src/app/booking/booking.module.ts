import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BookingComponent } from './booking.component';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [ BrowserModule,
        RouterModule.forChild([
            {path: 'booking',component: BookingComponent}
        ])
     ],
    declarations: [ BookingComponent]
})

export class BookingModule { }