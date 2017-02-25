import { MongoClient, Db } from 'mongodb';

import { Booking } from '../model/booking';
import { Connection } from './connection';


export class BookingPersistence{
    list(): Promise<Booking[]>{
        let database: Db;
        return Promise.resolve(
            Connection.conn()
                .then((db: Db) => {
                    database = db;

                    return db.collection('booking').find().toArray();
                })
                .then((bookings: Booking[]) => {
                    database.close();

                    return bookings;    
                })
        );
    }
}