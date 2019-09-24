module.exports = function (sequelize, DataTypes) {
 
return sequelize.define('user', {
    
    username: { type:DataTypes.STRING,
        unique: {
            args: true,
            msg: 'Username already in use - please choose a new one!'
              }},

    passwordhash: {type:DataTypes.STRING, 
        },

});
};