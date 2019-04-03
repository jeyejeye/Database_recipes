import Sequelize from 'sequelize';
import { connect } from '../../../db';
import Recipe from '../recipe/recipe.model';

const schema = {
    name: Sequelize.STRING,
    token: Sequelize.STRING
};

const User = connect().sequelize.define('user', schema, {
    indexes: [{
        unique: true,
        fields: ['token']
    }],
    underscored: true,
    freezeTableName: true,
});
User.hasMany(Recipe);
export default User;
