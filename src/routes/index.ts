import { Router } from 'express';
import { authRouter } from './auth';
import { userRouter } from './user';
import { moviesRouter } from './movie';
import { reviewsRouter } from './reviews';

const v1Router = Router();

v1Router.use('/auth', authRouter);
v1Router.use('/user', userRouter);
v1Router.use('/movie', moviesRouter);
v1Router.use('/review', reviewsRouter);
// All routes go here

export { v1Router };
