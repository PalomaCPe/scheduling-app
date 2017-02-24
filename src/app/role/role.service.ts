import { Injectable } from '@angular/core';
import { ROLES } from '../shared/mocks';
import { Role } from './role';

@Injectable()
export class RoleService {

    getRoles(): Role[] {
        return ROLES;
    }

    getRole(id: number): Role {
        return ROLES.find(r => r.id == id);
    }
}