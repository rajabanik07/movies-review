/* eslint-disable prettier/prettier */
import * as Sequelize from 'sequelize';

export interface IReview extends Sequelize.Model  {
  id: number;
  userId: number;
  movieId: number;
  review: string;
  rating: number;
}

export interface ICreateReviewRequest {
  userId: number;
  movieId: number;
  review: string;
  rating: number;
}

export interface IReviewResponse {
  id: number;
  userId: number;
  movieId: number;
  review: string;
  rating: number;
}
