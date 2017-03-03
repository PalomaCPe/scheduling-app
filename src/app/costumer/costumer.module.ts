import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SharedModule } from './../shared/shared.module';
import { CostumerComponent } from './costumer.component';
//import { CostumerDetailsComponent } from './costumer-details.component';

import { CostumerService } from './Costumer.service';
//import { ProfessionalService } from '../../professional/professional.service';

@NgModule({
    imports: [BrowserModule, FormsModule, SharedModule,
        RouterModule.forRoot([
            { path: 'costumers', component: CostumerComponent },
          //  { path: 'Costumers/:action/:id', component: CostumerDetailsComponent }
        ])],
    declarations: [CostumerComponent],
    providers: [CostumerService]
})

export class CostumerModule { }