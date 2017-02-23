import { Component } from '@angular/core';
import { Role } from './role';
import { RoleService } from './role.service';

@Component({
    moduleId: module.id,
    selector: 'role-app' ,
    templateUrl: 'role.html'
})

export class RoleComponent{
    constructor(
        private _roleService: RoleService
    ) { }

     roleLabel: string = "Página de cargos";
     roles: Role[] = this._roleService.getRoles();
}
