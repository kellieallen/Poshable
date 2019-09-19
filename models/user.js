module.exports = function (sequelize, DataTypes) {
 
return sequelize.define('user', {
 username: {
          type:DataTypes.STRING
          /*validate: {
              isAlphanumeric: {
                  msg: 'Username must be letters or numbers only'
              }
            */},

 passwordhash: {
  type:DataTypes.STRING
 }
});
};