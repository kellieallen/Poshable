module.exports = function (sequelize, DataTypes) {
    return sequelize.define('log', {
        item: {type:DataTypes.STRING, allowNull: true},
        brand: {type:DataTypes.STRING, allowNull: true},
        description: {type:DataTypes.STRING, allowNull: true},
        purchasePrice: {type:DataTypes.INTEGER, allowNull: true},
        soldPrice: {type:DataTypes.INTEGER, allowNull: true},
        forSaleDate: {type:DataTypes.DATEONLY, allowNull: true},
        soldDate: {type:DataTypes.DATEONLY, allowNull: true},
        inventory: {type:DataTypes.STRING, allowNull: true},
        owner: {type:DataTypes.INTEGER, allowNull: true}
        


    });
};