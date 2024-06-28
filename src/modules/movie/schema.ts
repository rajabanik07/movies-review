/* eslint-disable prettier/prettier */
import * as Sequelize from 'sequelize';
import { sequelize } from '../../config/database/sql';
import { IMovie } from './model';

export const MovieSchema = sequelize.define<IMovie>(
  'movies',
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    releaseDate: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
  },
  {
    timestamps: false,
  },
);

export default MovieSchema;
