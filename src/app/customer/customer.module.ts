import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule, Router } from '@angular/router';

import { CustomerComponent } from './customer.component';
import { CustomerDetailComponent } from './customer-detail.component';

import { CustomerService } from './customer.service';

@NgModule({
    imports: [BrowserModule, RouterModule.forChild([
                                                    { path: 'customers', component: CustomerComponent },
                                                    { path: 'customers/:id', component: CustomerDetailComponent}])],
    exports: [],
    declarations: [CustomerComponent, CustomerDetailComponent],
    providers: [CustomerService],

})
export class CustomerModule { }
