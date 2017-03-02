import { MongoClient, Db } from 'mongodb';

const mongoUrl: string = 'mongodb://localhost:27017/mongodb';

export class Connection{
    static conn(): Promise<Db>{
        return Promise.resolve<Db>(
            MongoClient.connect(mongoUrl)
                .then((db:Db) => {
                    console.log('Conectou!');
                    return db;
                })
        )
        .catch(() => {console.log('Erro')});
    }
}