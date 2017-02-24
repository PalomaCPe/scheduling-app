import { Router, Response, Request } from 'express';
import { ProfessionalApplication } from '../application/professional.application';
import { Professional } from '../model/professional';

export const professionalRouter: Router = Router();

professionalRouter.get('/list', (request: Request, response: Response) => {
    let professionalApplication: ProfessionalApplication = new ProfessionalApplication();

    professionalApplication.getCustomers().then((resultado: Professional[]) => {
        response.json(resultado);
    });

})