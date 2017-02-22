import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule, Router } from '@angular/router'
import { BookingModule } from './booking/booking.module'
import { CostumerModule } from './costumer/costumer.module'
import { AppComponent } from './app.component';

@NgModule({
    imports: [ BrowserModule, BookingModule, RouterModule
        .forRoot([{ path: '', redirectTo: '/', pathMatch: 'full' }])],
    declarations: [ AppComponent ],
    bootstrap: [ AppComponent]
})

export class AppModule { 
    
}