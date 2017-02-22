import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule, Router } from '@angular/router';

import { CustomerComponent }   from './customer.component';

@NgModule({
    imports: [BrowserModule, RouterModule.forChild([{path: 'customers', component: CustomerComponent}]) ],
    exports: [],
    declarations: [CustomerComponent],
    providers: [CustomerComponent],
})
export class CustomerModule { }
