import express from 'express';
import controller from './recipe.controller';

export const recipeRouter = express.Router({});

recipeRouter.route('/')
    .get(controller.getAll);