import { Role } from '../model/role';
import { RolePersistence } from '../persistence/role.persistence';

export class RoleApplication {
    constructor (
        private rolePersistence: RolePersistence = new RolePersistence()
    ){}

    getRoles(): Promise<Role[]>{
        return this.rolePersistence.list();
    }
}