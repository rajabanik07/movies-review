/* eslint-disable prettier/prettier */
import { Router } from 'express';
import { moviesController } from '@controllers/index';

const moviesRouter = Router();

moviesRouter.get('/movies', moviesController.getMoviesController);

export {moviesRouter};
