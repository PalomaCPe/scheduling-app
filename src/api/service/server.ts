import * as express from 'express';
import * as http from 'http';
import * as path from 'path';
import { Request, Response } from 'express';
import { json } from 'body-parser';

//


const app: express.Application = express();

app.use(express.static(path.join(__dirname, '../../')));

app.use(json());

//Route config

app.get('*', (request: Request, response: Response) => {
    response.sendFile(path.join(__dirname, '../../index.html'));

});

//Server 
const server: http.Server = http.createServer(app);
server.listen(3000);

export { app }


