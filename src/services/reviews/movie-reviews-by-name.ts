/* eslint-disable prettier/prettier */
import ReviewSchema from '@modules/reviews/schema';
import MovieSchema from '@modules/movie/schema';
import { IReview } from '@modules/reviews/model';
import { Op } from 'sequelize';

// export const getReviewsbyTitle = async (title: string): Promise<IReview[]> => {
//     const reviews = await ReviewSchema.findAll({
//       include: [{
//         model: MovieSchema,
//         as: 'movie',
//         where: {
//           title: {
//             [Op.like]: `%${title}%`
//           }
//         },
//         attributes: ['title']
//       }],
//       attributes: ['id', 'userId', 'movieId', 'review', 'rating']
//     });
    
//     return reviews;
//   };

export const getReviewsbyTitle = async (title: string): Promise<IReview[]> => {
    const reviews = await ReviewSchema.findAll({
      include: [{
        model: MovieSchema,
        as: 'movie',
        where: {
          title: {
            [Op.like]: `%${title}%`
          }
        },
        attributes: ['title']
      }],
      attributes: ['id', 'userId', 'movieId', 'review', 'rating']
    });
  
    return reviews;
  };