import { MongoClient, Db, InsertOneWriteOpResult } from 'mongodb';
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

    create(booking: Booking): Promise<Booking> {
        let database: Db;

        return Promise.resolve(
            Connection.conn().then((db: Db) => {
                database = db;

                return db.collection('booking').insertOne({
                    id: booking.id,
                    startDate: booking.startDate,
                    endDate: booking.endDate,
                    percentual: booking.percentual,
                    projectId: booking.projectId,
                    professionalId: booking.professionalId
                })
            }).then((inserted: InsertOneWriteOpResult) => {
                if (inserted.result.ok == 1) {
                    let saved: Booking = inserted.ops[0] as Booking;
                    return saved;
                } else {
                    Promise.reject<Booking>(Error('Erro ai inserir'));
                }
            })
        );


    }
}