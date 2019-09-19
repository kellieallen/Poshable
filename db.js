const Sequelize = require('sequelize'); // imports sequelize package

      
const sequelize = new Sequelize(process.env.DATABASE_URL, {
    // Create an instance of Sequelize for use in the module with the sequelize variable.
    // Use the constructor to create a new Sequelize object.
    // Identifies table name, username, password in db
    // The host points to the local port for Sequelize. This is 5432.
    dialect: 'postgres' // Identify the QL dialect being used. Could be MSSQL, SQLLite, or others

});
      
sequelize.authenticate().then(
    // Use the sequelize variable to access methods.
    // Call the authenticate() method.
    // authenticate() returns a promise. Use .then().

    function() {
        console.log('Connected to workoutlog postgres database');
    // Fire a function that shows if we're connected.

    },
    function(err){
        console.log(err);
    // Fire an error if there are any errors.

    }
);

module.exports = sequelize;
    // Export the module.
