import { MongoClient, Db } from 'mongodb';

import { Project } from '../model/project';
import { PROJECTS } from '../../app/shared/mocks';
import { Connection } from './connection';

export class ProjectPersistence {
    list(): Promise<Project[]>{
        let database: Db;
        return Connection.conn()
            .then((db: Db) => {
                database = db;
                return db.collection('project').find().toArray();
            })
            .then((project: Project[]) => {
                database.close();
                return project;
            });
    }

    read(id: number): Promise<Project>{
        let database: Db;
        return Connection.conn()
            .then((db: Db) => {
                database = db;
                return db.collection('project').findOne({id: id});
            })
            .then((project: any) => {
                database.close();
                return project;
            });
    }
};