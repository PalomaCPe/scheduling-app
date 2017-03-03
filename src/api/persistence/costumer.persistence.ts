import { MongoClient, Db, FindAndModifyWriteOpResultObject, Collection } from 'mongodb';

import { Costumer } from '../model/Costumer';
import { ICrud } from '../crud.interface';
import { Connection } from '../connection';

import { BOOKINGS } from '../../app/shared/mock';

export class CostumerPersistence implements ICrud<Costumer> {

    list(): Promise<Costumer[]> {
        return Promise.resolve(Connection.conn().then((db: Db) => {
            let CostumerList = db.collection('Costumer').find({ deleted: false }).toArray() as Promise<Costumer[]>;
            db.close();
            return CostumerList;
        }));
    }


    read(id: number): Promise<Costumer> {
        return Promise.resolve(Connection.conn().then((db: Db) => {
            let Costumer = db.collection('Costumer').findOne({ id: id, deleted: false }) as Promise<Costumer>
            db.close();
            return Costumer;
        }));
    }

    create(Costumer: Costumer): Promise<Costumer> {
        return Promise.resolve(Connection.conn().then((db: Db) => {
            db.collection('Costumer').insertOne(Costumer);
            db.close();
            return Costumer;
        }));
    }

    update(Costumer: Costumer): Promise<Costumer> {
        return Promise.resolve(Connection.conn().then((db: Db) => {
            db.collection('Costumer').update({ id: Costumer.id }, Costumer);
            db.close();
            return Costumer;
        }));
    }

    delete(id: number): Promise<boolean> {
        return Promise.resolve(Connection.conn().then((db: Db) => {
            db.collection('Costumer').update({ id: id }, { deleted: true });
            db.close();
            return Promise.resolve(id ? true : false);
        }));
    }
}