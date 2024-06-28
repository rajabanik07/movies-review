/* eslint-disable prettier/prettier */
import { Request, Response } from 'express';
import { controller } from '../../config/controller/controller';
import { getAllMovies } from '../../services/movies/get-all-movies';

export const getMoviesController = controller(async (req: Request, res: Response) => {
  const movies = await getAllMovies();
  res.json(movies);
});