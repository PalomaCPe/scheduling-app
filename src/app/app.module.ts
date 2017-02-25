import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// ROTA
import { RouterModule, Router } from '@angular/router';

import { BookingModule } from './booking/booking.module';
import { AppComponent } from './app.component';

import {HttpModule} from '@angular/http';

import  'rxjs/add/operator/toPromise';

@NgModule({
    imports: [ BrowserModule, BookingModule, HttpModule,
    RouterModule.forRoot([{ path: '', redirectTo: "/", pathMatch:'full'}])],
    declarations: [ AppComponent ],
    bootstrap: [ AppComponent]
})

export class AppModule { }