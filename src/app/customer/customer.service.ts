import { Injectable } from '@angular/core';

import { Customer } from './customer';

import { CUSTOMERS } from '../shared/mocks';

@Injectable()
export class CustomerService {
    getCustomers(): Customer[] {
        return CUSTOMERS;
    }
    getCustomer(id: number): Customer {
        return CUSTOMERS.find(r => r.id == id);
    }
}