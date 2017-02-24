import { Role } from '../model/role';
import { ROLES } from '../../app/shared/mocks';

export class RolePersistence {
    list(): Promise<Role[]>{
        return Promise.resolve(ROLES);
    }
};