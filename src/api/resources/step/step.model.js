import Sequelize from 'sequelize';
import { connect } from '../../../db';


const schema = {
    title: Sequelize.STRING,
    description: Sequelize.STRING,
};

const Step = connect().sequelize.define('step', schema, {
    underscored: true,
    freezeTableName: true,
});


export default Step;
