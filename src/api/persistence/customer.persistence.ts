import { MongoClient, Db } from 'mongodb';

import { Customer } from '../model/customer';
import { CUSTOMERS } from '../../app/shared/mocks';
import { Connection } from './connection';

export class CustomerPersistence {
    list(): Promise<Customer[]>{
        let database: Db;
        return Connection.conn()
            .then((db: Db) => {
                database = db;
                return db.collection('customer').find().toArray();
            })
            .then((customers: Customer[]) => {
                database.close();
                return customers;
            });
    }

    read(id: number){
        let database: Db;
        return Connection.conn()
            .then((db: Db) => {
                database = db;
                return db.collection('customer').findOne({id: id});
            })
            .then((customer: any) => {
                database.close();
                return customer as Customer;
            });
    }
};