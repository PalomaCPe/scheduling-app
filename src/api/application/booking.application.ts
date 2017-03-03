import { Booking } from '../model/booking';
import { BookingPersistence } from '../persistence/booking.persistence';

export class BookingApplication{
    constructor(
        private bookingPersistence: BookingPersistence = new BookingPersistence()
    ){}

    getBookings(): Promise<Booking[]>{
        return this.bookingPersistence.list();
    }

    getBooking(id: number): Promise<Booking>{
        return this.bookingPersistence.read(id);
    }

    createBooking(booking: Booking): Promise<Booking>{
         return this.bookingPersistence.create(booking);
    }
}