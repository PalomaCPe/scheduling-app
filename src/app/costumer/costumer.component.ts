import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'costumer' ,
    templateUrl: 'costumer.html'
})

export class Costumer{ 
    nome: string = 'costumer';
    cnpj: string = '';
    contact: string = '';
    email: string ='';
    avaContact: string= '';
}