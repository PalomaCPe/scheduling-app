import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Router } from '@angular/router';
import { CostumerComponent } from './costumer.component';


@NgModule({
    imports: [ BrowserModule, RouterModule
    .forChild([{ path: 'costumer', component: CostumerComponent}])],
    declarations: [ CostumerComponent ]
})

export class CostumerModule { 
    
}