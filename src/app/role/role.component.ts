import { Component, OnInit } from '@angular/core';
import { Role } from './role';

import { RoleService } from './role.service';

@Component({
    moduleId: module.id,
    selector: 'role' ,
    templateUrl: 'role.html'
})

export class RoleComponent implements OnInit {
    constructor(private _customerService: RoleService) { }

    roles: Role[] = this._customerService.getRoles();

    pageName: string = "Perfil";

    ngOnInit() { }
}