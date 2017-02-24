import * as express from 'express';
import { Response, Resquest } from 'express';
import * as http from 'http';
import * as path from 'path';
import { json } from 'body-parser';

import { bookingRouter } from './service/booking.service';

const app: expre