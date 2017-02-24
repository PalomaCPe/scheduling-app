import { Customer } from '../model/customer';
import { CUSTOMERS } from '../../app/shared/mocks';

export class CustomerPersistence {
    list(): Promise<Customer[]>{
        return Promise.resolve(CUSTOMERS);
    }
};