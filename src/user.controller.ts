import * as express from 'express';

import { UserModel } from './user.model';

const userRoutes = express.Router();
userRoutes.get('/user', async (req: express.Request, resp: express.Response, next: express.NextFunction) => {
	try {
		let users: any = await UserModel.find({});
		resp.json(users);
	} catch (err) {
		resp.status(500);
		resp.end();
	}
});

userRoutes.post('/user', async (req: express.Request, resp: express.Response, next: express.NextFunction) => {
	try {
	const username = req.body.username;
	const email = req.body.email;
	const dob = Date.parse(req.body.dob);
	const user = new UserModel({username, email, dob});
	await user.save();
	resp.json('User added!');
} catch (err) {
	resp.status(400).json('Error: ' + err);
}
	
});

userRoutes.put('/user/update/:id', async (req: express.Request, resp: express.Response, next: express.NextFunction) => {
	const username = req.body.username;
	const email = req.body.email;
	const dob = Date.parse(req.body.dob);
	const id = req.params['id'];
	await UserModel.findOneAndUpdate({_id: id}, {username: username, email: email, dob: dob });
	resp.json('User Updated!');
	resp.end();
});

userRoutes.delete('/user/:id', async (req: express.Request, resp: express.Response, next: express.NextFunction) => {
	const id = req.params['id'];
	await UserModel.findByIdAndRemove(id);
	resp.json('User deleted!');
	resp.end();
});

export { userRoutes }