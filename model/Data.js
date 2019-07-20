const Sequelize = require('sequelize');

class Data extends Sequelize.Model {
    static init(sequelize) {
        super.init( {
            title: {type: Sequelize.STRING(300), allowNull: false},
            image: {type: Sequelize.STRING(1000), allowNull: false}
        }, {sequelize, modelName: 'new_table'})
    }

}


module.exports = {Data};