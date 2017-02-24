import { Router, Response, Request } from 'express';
import { Customer } from '../model/customer';
import { CustomerApplication } from '../application/customer.application';

export const customerRouter: Router = Router();

customerRouter.get('/list', (request: Request, response: Response) => {
    let customerApplication: CustomerApplication = new CustomerApplication();

    customerApplication.getCustomers()
        .then((resultado: Customer[]) => {
            response.json(resultado);
        });
})