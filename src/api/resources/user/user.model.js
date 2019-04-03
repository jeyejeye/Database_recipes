import Sequelize from 'sequelize';
import { connect } from '../../../db';

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

export default User;