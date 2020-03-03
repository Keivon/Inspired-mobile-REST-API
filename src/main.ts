import { app } from './app';
import * as http from 'http';

import * as mongoose from 'mongoose';

const PORT = process.env.PORT || 5000;
const MONGO_URl = 'mongodb://localhost:27017/user';
const server = http.createServer(app);
server.listen(PORT);
server.on('listening', async () => {
	console.info(`Listening on port ${PORT}`);
	mongoose.connect(MONGO_URl, { useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true });
	mongoose.connection.on('open', () => {
		console.info('Connected to Mongo.');
	});
	mongoose.connection.on('error', (err: any) => {
		console.error(err);
	});
});