import { Router, Response, Request } from 'express';
import { CustomerApplication } from '../application/customer.application';
import { Customer } from '../model/customer';

export const customerRouter: Router = Router();

customerRouter.get('/list', (request: Request, response: Response) => {
    let bookingApplication: CustomerApplication = new CustomerApplication();

    bookingApplication.getCustomers().then((resultado: Customer[]) => {
        response.json(resultado);
    });

})