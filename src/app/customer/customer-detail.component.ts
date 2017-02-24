import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { CustomerService } from './customer.service';
import { Customer } from './customer';

@Component({
    moduleId: module.id,
    templateUrl: 'customer-detail.html'
})

export class CustomerDetailComponent implements OnInit {
    constructor(
        private _route: ActivatedRoute,
        private _customerService: CustomerService) { }
        
    pageName: string = "Detalhes da Cliente";
    id: number;
    customer: Customer;

    getCustomer() {
        this._route.params.forEach((param: Params) => { this.id = param["id"] });

        this.customer = this._customerService.getCustomer(this.id);
    }

    ngOnInit()
    {
        this.getCustomer();
    }
}