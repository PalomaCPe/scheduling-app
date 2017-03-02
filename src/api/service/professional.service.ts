import { Router, Response, Request } from 'express';
import { Professional } from '../model/professional';
import { ProfessionalApplication } from '../application/professional.application';

export const professionalRouter: Router = Router();

professionalRouter.get('/list', (request: Request, response: Response) => {
    let professionalApplication: ProfessionalApplication = new ProfessionalApplication();

    professionalApplication.getProfessionals()
        .then((resultado: Professional[]) => {
            response.json(resultado);
        });
})