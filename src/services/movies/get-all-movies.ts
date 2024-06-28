/* eslint-disable prettier/prettier */
import MovieSchema from "@modules/movie/schema";
import { IMovie } from "@modules/movie/model";

export const getAllMovies = async (): Promise<IMovie[]> => {
    const movies = await MovieSchema.findAll();
    return movies;
  };
  