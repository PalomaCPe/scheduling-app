import { Router, Response, Request } from 'express';
import { RoleApplication } from '../application/role.application';
import { Role } from '../model/role';

export const roleRouter: Router = Router();

roleRouter.get('/list', (request: Request, response: Response) => {
    let roleApplication: RoleApplication = new RoleApplication();

    roleApplication.getRoles().then((resultado: Role[]) => {
        response.json(resultado);
    });

})