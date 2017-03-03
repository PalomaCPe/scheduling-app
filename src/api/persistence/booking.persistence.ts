import { MongoClient, Db, InsertOneWriteOpResult } from 'mongodb';

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

    read(id: number): Promise<Booking>{
        let database: Db;
        return Promise.resolve(
            Connection.conn()
            .then((db: Db) => {
                database = db;

                return db.collection('booking').findOne({ id: id });
            })
            .then((booking: any) => {
                database.close();
                return booking as Booking;
            })
        );
    }

    create(booking: Booking): Promise<Booking>{
        let database: Db;

        return Promise.resolve(
            Connection.conn()
            .then((db: Db) => {
                database = db;

                return db.collection('booking').insertOne({
                    id: booking.id,
                    projectId: booking.projectId,
                    professionalId: booking.professionalId,
                    startDate: booking.startDate,
                    endDate: booking.endDate,
                    percentual: booking.percentual
                })
            })
            .then((inserted: InsertOneWriteOpResult) => {
                if(inserted.result.ok == 1){
                    let saved: Booking = inserted.ops[0] as Booking;

                    return saved;
                }else{
                    return Promise.reject<Booking>(Error('Erro ao inserir'))
                }
            })
        );
    }
}