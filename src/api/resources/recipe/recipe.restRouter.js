import express from 'express';
import controller from './recipe.controller';

export const recipeRouter = express.Router({});

recipeRouter.param('id', controller.findByParam);
recipeRouter.param('userId', controller.getByUser);

recipeRouter.route('/')
    .get(controller.getAll)
    .post(controller.createOne);


recipeRouter.route('/:id')
    .put(controller.updateOne)
    .delete(controller.deleteOne)
    .get(controller.getOne);


recipeRouter.route('/user_id/:userId')
    .get(controller.getByUser);
