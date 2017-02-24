import { Injectable } from '@angular/core';
import { Customer } from './customer';
import { CUSTOMERS } from '../shared/mock';

@Injectable()
export class CustomerService {
    getCustomer(): Customer[] {
        return CUSTOMERS;
    }
}