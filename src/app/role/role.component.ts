import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'role' ,
    templateUrl: 'role.html'
})

export class Role { 
    id: string = 'role';
    name: string = '';
    brc: string = '';
    description: string ='';
    level: string= '';
}