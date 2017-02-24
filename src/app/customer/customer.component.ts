import { Component } from '@angular/core';
import { Customer } from './customer';
import { CustomerService } from './customer.service';

@Component({
    moduleId: module.id,
    selector: 'customer-app',
    templateUrl: 'customer.html'
})

export class CustomerComponent {
    constructor(
        private _customeService: CustomerService
    ) { }

    propriedadeC: string = "Tela de Cliente";
    customers: Customer[] = this._customeService.getCustomer();
}