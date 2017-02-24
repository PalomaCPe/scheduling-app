import { Customer } from '../model/customer';
import { CustomerPersistence } from '../persistence/customer.persistence';

export class CustomerApplication {
    constructor(
        private customerPersistence: CustomerPersistence = new CustomerPersistence()
    ) { }

    getCustomers(): Promise<Customer[]> {
        return this.customerPersistence.list();
    }
}
