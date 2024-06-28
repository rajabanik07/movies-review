/* eslint-disable prettier/prettier */
import * as Sequelize from 'sequelize';

export interface IMovie extends Sequelize.Model {
  id: number;
  title: string;
  releaseDate: Date;
}

export interface IMovieListResponse {
  id: number;
  title: string;
  releaseDate: Date;
}

export interface IMovieDetailResponse extends IMovieListResponse {
  avgRating: number;
  reviews: IReviewResponse[];
}

export interface IReviewResponse {
  id: number;
  userId: number;
  movieId: number;
  review: string;
  rating: number;
}
