import * as express from 'express';
import * as cors from 'cors';
import * as bodyparser from 'body-parser';


import { userRoutes } from './user.controller';

const app = express();
app.use(cors());
app.use(bodyparser.json());

app.use(userRoutes);

export { app };
