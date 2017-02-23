import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// ROTA
import { RouterModule, Router } from '@angular/router';

import { AppComponent } from './app.component';
import { BookingModule } from './booking/booking.module';
import { CostumerModule }    from './costumer/costumer.module';
import { ProjectModule } from './project/project.module';

@NgModule({                                     //ROTA
    imports: [BrowserModule, BookingModule, CostumerModule, RouterModule
        .forRoot([{ path: '', redirectTo: '/', pathMatch: 'full' }])],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})

export class AppModule { }
