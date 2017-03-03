import { MongoClient, Db } from 'mongodb';

const mongoURL: string = 'mongodb://localhost:27017/database';

export class Connection {
    static conn(): Promise<Db> {
        return Promise.resolve<Db>(MongoClient.connect(mongoURL))
            .then((db: Db) => {
                console.log('conectou');
                return db;
            })
            .catch((e: any) => { console.log('Erro') });
    }
}