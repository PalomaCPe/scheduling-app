import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { customerComponent } from './customer.component';

@NgModule({
    imports: [ BrowserModule ],
    declarations: [ customerComponent ],
    bootstrap: [ customerComponent]
})

export class customerModule { }