import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//ROTA
import { RouterModule, Router } from '@angular/router';

import { ProfessionalComponent } from '../professional/professional.component';
import { ProjectComponent } from '../project/project.component';
import { BookingComponent } from './booking.component';
import { BookingDetailComponent } from './booking-detail.component';


import { ProfessionalService } from "../professional/professional.services";
import { BookingService } from './booking.service';
import { ProjectService } from '../project/project.service';

import { PercentualPipe} from '../shared/percentualPipe';

@NgModule({
    imports: [BrowserModule,
    // ROTA
    RouterModule.forChild([
        { path: 'booking', component: BookingComponent},
        { path: 'booking/:id', component: BookingDetailComponent}
    ])],
    declarations: [ BookingComponent, BookingDetailComponent, ProjectComponent, ProfessionalComponent,  PercentualPipe ],
    providers: [BookingService, ProjectService, ProfessionalService],
})

export class BookingModule { }
