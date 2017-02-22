import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AlocationModule } from './alocation/alocation.module'

@NgModule({
    imports: [ BrowserModule, AlocationModule, RouterModule
    .forRoot([{ path:'', redirectTo: '/', pathMatch: 'full'}]) ],
    declarations: [ AppComponent ],
    bootstrap: [ AppComponent]
})

export class AppModule { }