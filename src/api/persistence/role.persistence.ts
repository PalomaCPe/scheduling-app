import { MongoClient, Db } from 'mongodb';

import { Role } from '../model/role';
import { ROLES } from '../../app/shared/mocks';
import { Connection } from './connection';

export class RolePersistence {
    list(): Promise<Role[]>{
        let database: Db;
        return Connection.conn()
            .then((db: Db) => {
                database = db;
                return db.collection('role').find().toArray();
            })
            .then((role: Role[]) => {
                database.close();
                return role;
            });
    }

    read(id: number): Promise<Role>{
        let database: Db;
        return Connection.conn()
            .then((db: Db) => {
                database = db;
                return db.collection('role').findOne({id: id});
            })
            .then((role: any) => {
                database.close();
                return role;
            });
    }
};