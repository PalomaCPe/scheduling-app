import { Booking } from '../model/booking';
import { BookingPersistence } from '../persistence/booking.persistence';

export class BookingApplication {
    constructor(

        private bookingPersistence: BookingPersistence = new BookingPersistence()
    ) { }

    getBookings(): Promise<Booking[]> {
        return this.bookingPersistence.list();
    }
}