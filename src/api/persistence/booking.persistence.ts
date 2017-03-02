import { MongoClient, Db } from 'mongodb';

import { Connection } from './connection';

import { Booking } from '../model/booking';

//import { BOOKINGS } from '../../app/shared/mock'; <-- MOCK -->

export class BookingPersistence {
    list(): Promise<Booking[]> {
        let database: Db;
        return Promise.resolve(Connection.conn()
            .then((db: Db) => {
                database = db;
                return db.collection('booking').find().toArray();
            })
            .then((bookings: Booking[]) => {
                database.close();
                return bookings;
            })
        );
        // return Promise.resolve(BOOKINGS); <-- MOCK -->
    }

    read(id: number): Promise<Booking> {
        let database: Db;
        return Promise.resolve(
            Connection.conn().then((db: Db) => {
                database = db;

                return db.collection('booking').findOne({ id: id });
            }).then((booking: any) => {
                database.close();

                return booking as Booking;
            })
        );
    }
}