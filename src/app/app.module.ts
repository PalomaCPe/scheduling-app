import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// ROTA
import { RouterModule, Router } from '@angular/router';

import { AppComponent } from './app.component';
import { BookingModule } from './booking/booking.module';

import { Response, Http} from '@angular/http';

@NgModule({                                     //ROTA
    imports: [BrowserModule, BookingModule, RouterModule
        .forRoot([{ path: '', redirectTo: '/', pathMatch: 'full' }])],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})

export class AppModule { }
