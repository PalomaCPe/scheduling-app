import { Booking } from '../model/booking';
import { BOOKINGS } from '../../app/shared/mock';

export class BookingPersistence {
    list(): Promise<Booking[]> {
        return Promise.resolve(BOOKINGS);
    }
}