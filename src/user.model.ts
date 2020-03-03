import * as mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
	username: {type: String, lowercase: true, required: [true], match: [/^[a-zA-Z0-9]+$/, 'is invalid']},
  email: {type: String, lowercase: true, required: [true], match: [/\S+@\S+\.\S+/, 'is invalid']},
  dob: { type: Date, required: true }
}, {timestamps: true});


const UserModel = mongoose.model('User', UserSchema);

export { UserModel }