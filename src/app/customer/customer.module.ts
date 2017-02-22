import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {CustomerComponent} from './customer.component';
import {RouterModule, Router} from '@angular/router'

@NgModule({
    imports: [ BrowserModule,
    // ROTA
    RouterModule.forChild([
        { path: 'customer', component: CustomerComponent }
    ])],
    declarations: [CustomerComponent]
})

export class CustomerModule {}