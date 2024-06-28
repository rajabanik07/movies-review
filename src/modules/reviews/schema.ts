/* eslint-disable prettier/prettier */
import * as Sequelize from 'sequelize';
import { sequelize } from '../../config/database/sql';
import { IReview } from './model';
import UserSchema from '@modules/users/schema';
import MovieSchema from '@modules/movie/schema';

export const ReviewSchema = sequelize.define<IReview>(
  'reviews',
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    userId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: UserSchema,
        key: 'id',
      },
      onDelete: 'CASCADE',
    },
    movieId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: MovieSchema,
        key: 'id',
      },
      onDelete: 'CASCADE',
    },
    review: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    rating: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  },
);

UserSchema.hasMany(ReviewSchema, { foreignKey: 'userId' });
MovieSchema.hasMany(ReviewSchema, { foreignKey: 'movieId' });
ReviewSchema.belongsTo(UserSchema, { foreignKey: 'userId' });
ReviewSchema.belongsTo(MovieSchema, { foreignKey: 'movieId' });


export default ReviewSchema;
