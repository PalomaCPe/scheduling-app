import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'costumer' ,
    templateUrl: 'costumer.html'
})

export class Costumer{ 
    name: string = 'costumer';
    contact: string = '';
    email: string ='';
    sponsor: string= '';
}