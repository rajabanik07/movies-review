/* eslint-disable prettier/prettier */
import { Request, Response, } from 'express';
import { getReviewsbyTitle } from '@services/reviews/movie-reviews-by-name';
import { controller } from '@config/controller/controller';



class ReviewController {
  async getReviewsByTitle(req: Request, res: Response) {
    const title = req.params.title;
    const reviews = await getReviewsbyTitle(title);
    res.json(reviews);
  }
}

const reviewController = new ReviewController();

export const getReviewsByTitleController = controller(reviewController.getReviewsByTitle.bind(reviewController));