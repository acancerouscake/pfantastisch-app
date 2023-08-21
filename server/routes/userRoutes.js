import express from 'express';
import {
	testRoute,
	findAllUsers,
	findUserByEmail,
	createUser,
	updateUser,
	middleTest,
	login,
	getMe,
	updatePassword,
} from '../controllers/userController.js';
import {multerUpload} from '../middlewares/multer.js';
import jwtAuth from '../middlewares/jwtAuth.js';

const appRouter = express.Router();

appRouter.get('/test', middleTest, testRoute);
appRouter.get('/all', findAllUsers);
appRouter.get('/email/:email', findUserByEmail);
appRouter.get('/me', jwtAuth, getMe);

appRouter.post('/new', multerUpload.single('image_url'), createUser);
appRouter.post('/login', login);

appRouter.put('/updateUser', updateUser);
appRouter.put('/updatePassword', updatePassword);

export default appRouter;
