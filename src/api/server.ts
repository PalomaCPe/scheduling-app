import * as express from 'express';
import * as http from 'http';
import * as path from 'path';
import { Request, Response } from 'express';
import { json } from 'body-parser';

import { bookingRouter } from './service/booking.service'
import { customerRouter } from './service/customer.service'
import { professionalRouter } from './service/professional.service'
import { projectRouter } from './service/project.service'
import { roleRouter } from './service/role.service'

const app: express.Application = express();

app.use(express.static(path.join(__dirname, '../../')));
app.use(json());

app.use('/api/booking/', bookingRouter);
app.use('/api/customer/', customerRouter);
app.use('/api/professional/', professionalRouter);
app.use('/api/project/', projectRouter);
app.use('/api/role/', roleRouter);

//Route config
app.get('*', (request: Request, response: Response) => {
    response.sendFile(path.join(__dirname, '../../index.html'));
});

//Server 
const server: http.Server = http.createServer(app);
server.listen(3000);

export { app }
