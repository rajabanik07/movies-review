/* eslint-disable prettier/prettier */
import MovieSchema from '@modules/movie/schema';
import { IMovie } from '@modules/movie/model';
import { Op } from 'sequelize';

export const getMoviesByName = async (title: string): Promise<IMovie[]> => {
    const movies = await MovieSchema.findAll({
      where: {
        title: {
          [Op.like]: `%${title}%`,
        },
      },
    });
    return movies;
  };
  