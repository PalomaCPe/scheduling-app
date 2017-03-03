import { MongoClient, Db } from 'mongodb';

import { Professional } from '../model/professional';
import { PROFESSIONAL } from '../../app/shared/mocks';
import { Connection } from './connection';

export class ProfessionalPersistence {
    list(): Promise<Professional[]>{
        let database: Db;
        return Connection.conn()
            .then((db: Db) => {
                database = db;
                return db.collection('professional').find().toArray();
            })
            .then((professional: Professional[]) => {
                database.close();
                return professional;
            });
    }

    read(id: number): Promise<Professional>{
        let database: Db;
        return Connection.conn()
            .then((db: Db) => {
                database = db;
                return db.collection('professional').findOne({id: id});
            })
            .then((professional: any) => {
                database.close();
                return professional;
            });
    }
};