const Sequelize = require('sequelize');

class Data extends Sequelize.Model {
    static init(sequelize) {
        super.init( {
            id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
            title: {type: Sequelize.STRING(300), allowNull: false},
            image: {type: Sequelize.STRING(1000), allowNull: false},
            lng: {type: Sequelize.FLOAT, allowNull: false},
            lat: {type: Sequelize.FLOAT, allowNull: false}
        }, {sequelize, modelName: 'data'})
    }

}


module.exports = {Data};