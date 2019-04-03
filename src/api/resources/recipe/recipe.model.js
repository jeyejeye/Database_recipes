import Sequelize from 'sequelize';
import { connect } from '../../../db';

const schema = {
    title: Sequelize.STRING,
    photo_id: Sequelize.UUID,
    description: Sequelize.STRING,
    ingredients: Sequelize.STRING,
    steps: Sequelize.ARRAY(Sequelize.UUID),
};

const Recipe = connect().sequelize.define('recipe', schema, {
    underscored: true,
    freezeTableName: true,
});

export default Recipe;