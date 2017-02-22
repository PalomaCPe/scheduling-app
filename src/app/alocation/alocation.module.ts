import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Rota
import {RouterModule, Router} from '@angular/router'

import { AlocationComponent } from './alocation.component';

@NgModule({
    imports: [ BrowserModule, RouterModule.forChild([{ path:'alocation', component: AlocationComponent}
    ])],
    declarations: [ AlocationComponent ],
    
})

export class AlocationModule { }