import { Customer } from '../model/customer';
import { CUSTOMERS } from '../../app/shared/mock';

export class CustomerPersistence {
    list(): Promise<Customer[]> {
        return Promise.resolve(CUSTOMERS);
    }
}