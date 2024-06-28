/* eslint-disable prettier/prettier */
import { Router } from 'express';
import { reviewsController } from '@controllers/index';

const reviewsRouter = Router();

reviewsRouter.get('/:title', reviewsController.getReviewsByTitleController );

export {reviewsRouter};