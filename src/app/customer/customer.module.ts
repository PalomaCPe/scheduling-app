import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Router } from '@angular/router'
import { CustomerComponent } from './customer.component';
import { CustomerService } from './customer.service';

@NgModule({
    imports: [BrowserModule,
        // ROTA
        RouterModule.forChild([
            { path: 'customers', component: CustomerComponent }
        ])],
    declarations: [CustomerComponent],
    providers: [CustomerService]
})

export class CustomerModule { }