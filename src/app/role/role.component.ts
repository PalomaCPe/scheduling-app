import { Component } from '@angular/core';

import { Role } from './role';

import { RoleService } from './role.services';

@Component({
    moduleId: module.id,
    selector: 'role' ,
    templateUrl: 'role.html'
})

export class RoleComponent { 
   
    constructor (
        private _roleService: RoleService
    ) {}

     pageName: string = 'Roles';
     roleings: Role[] = this._roleService.getRoles();
     
}