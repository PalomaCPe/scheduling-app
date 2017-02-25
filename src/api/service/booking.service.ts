import {Router, Request, Response} from 'express';
import {Booking} from '../model/booking';
import {BookingApplication} from '../application/booking.application';

export const bookingRouter: Router = Router();

bookingRouter.get('/list', (request: Request, response: Response) => {
    let bookingApplication: BookingApplication = new BookingApplication();

    bookingApplication.getBookings()
        .then((resultado: Booking[]) => {
            response.json(resultado);
        });
});