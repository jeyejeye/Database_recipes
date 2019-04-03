import express from 'express';
import controller from './user.controller';

export const userRouter = express.Router({});

userRouter.param('id', controller.findByParam);

userRouter.route('/')
    .post(controller.createOne)
    .get(controller.getAll);

userRouter.route('/:id')
    .put(controller.updateOne)
    .delete(controller.deleteOne)
    .get(controller.getOne);