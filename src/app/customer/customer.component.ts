import { Component, OnInit } from '@angular/core';
import { Customer } from './customer';

import { CustomerService } from './customer.service';

@Component({
    moduleId: module.id,
    selector: 'customer',
    templateUrl: 'customer.html'
})
export class CustomerComponent implements OnInit {
    constructor(private _customerService: CustomerService) { }

    customers: Customer[] = this._customerService.getCustomers();

    ngOnInit() { }
}