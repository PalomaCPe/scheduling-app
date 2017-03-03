import { Router, Response, Request } from 'express';
import { Costumer } from '../model/Costumer';
import { CostumerApplication } from '../application/Costumer.application';

export const CostumerRouter: Router = Router();

CostumerRouter.route('/post')
    .post((request: Request, response: Response) => {
        new CostumerApplication().createCostumer(request.body)
            .then((result: Costumer) => {
                response.json(result);
            });
    });


CostumerRouter.route('/list')
    .get((request: Request, response: Response) => {
        new CostumerApplication().getCostumers()
            .then((result: Costumer[]) => {
                response.json(result);
            });
    });

CostumerRouter.route('/:id')
    .get((request: Request, response: Response) => {
        new CostumerApplication().getCostumer(+request.params.id)
            .then((result: Costumer) => {
                response.json(result);
            });
    })
    .put((request: Request, response: Response) => {
        new CostumerApplication().updateCostumer(request.body)
            .then((result: Costumer) => {
                response.json(result);
            });


    })
    .delete((request: Request, response: Response) => {
        new CostumerApplication().deleteCostumer(+request.params.id)
            .then((result: boolean) => {
                response.json(result);
            });
});