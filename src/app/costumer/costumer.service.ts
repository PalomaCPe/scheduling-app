import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Costumer } from './Costumer'


@Injectable()
export class CostumerService {

    private url: string = '/api/Costumer'

    constructor(private http: Http) { }

    createCostumer(Costumer: Costumer): Promise<Costumer> {
        return this.http.post(`${this.url}/post`, JSON.stringify(Costumer)).toPromise()
            .then((res: Response) => res.json().data || res.json())
            .catch((error: Error) => this.errorHandling(error))
    }

    getCostumerById(Costumer: Costumer): Promise<Costumer> {
        return this.http.get(`${this.url}/${Costumer.id}`).toPromise()
            .then((res: Response) => res.json().data || res.json())
            .catch((error: Error) => this.errorHandling(error))
    }

    getCostumers(): Promise<Costumer[]> {
        return this.http.get(`${this.url}/list`).toPromise()
            .then((res: Response) => res.json().data || res.json())
            .catch((error: Error) => this.errorHandling(error))
    }

    updateCostumer(Costumer: Costumer): Promise<Costumer> {
        return this.http.put(`${this.url}/${Costumer.id}`, JSON.stringify(Costumer)).toPromise()
            .then((res: Response) => res.json().data || res.json())
            .catch((error: Error) => this.errorHandling(error))
    }

    deleteCostumer(Costumer: Costumer): Promise<boolean> {
        return this.http.delete(`${this.url}/${Costumer.id}`).toPromise()
            .then((res: Response) => res.json().data || res.json())
            .catch((error: Error) => this.errorHandling(error));
    }

    errorHandling(error: any) {
        console.log(error)
    }

}