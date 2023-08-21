import jwt from 'jsonwebtoken';
import * as dotenv from 'dotenv';
dotenv.config();

export const generateToken = (user) => {
	const payload = {
		sub: user._id,
		email: user.email,
		image_url: user.image_url,
	};
	const options = {
		expiresIn: '7d',
	};
	const token = jwt.sign(payload, process.env.JWT_SECRET, options);
	return token;
};
