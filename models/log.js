module.exports = function (sequelize, DataTypes) {
    return sequelize.define('log', {
        item: DataTypes.STRING,
        brand: DataTypes.STRING, 
        description: DataTypes.STRING,
        purchasePrice: DataTypes.INTEGER,
        soldPrice: DataTypes.INTEGER, 
        forSaleDate: DataTypes.DATEONLY,
        soldDate: DataTypes.DATEONLY,
        inventory: DataTypes.STRING,
        owner: DataTypes.INTEGER
        


    });
};