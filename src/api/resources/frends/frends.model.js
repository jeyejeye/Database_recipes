import Sequelize from 'sequelize';
import { connect } from '../../../db';
import User from '../user/user.model';

const schema = {
    title: Sequelize.STRING,
    photo_id: Sequelize.UUID,
    description: Sequelize.STRING,
    ingredients: Sequelize.STRING,
//    steps: Sequelize.ARRAY(Sequelize.UUID),
};

const Frends = connect().sequelize.define('frends', schema, {
    underscored: true,
    freezeTableName: true,
});

Frends.hasMany(user);
export default Frends;
