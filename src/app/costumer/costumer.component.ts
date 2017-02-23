import { Component } from '@angular/core';
import { Costumer } from './Costumer';

@Component({
    moduleId: module.id,
    selector: 'costumer' ,
    templateUrl: 'costumer.html'
})

export class CostumerComponent{
    propriedade: string = 'Costumer';
 }