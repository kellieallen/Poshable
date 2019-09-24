require('dotenv').config();

var express = require('express'); 
var app = express();
var authTest = require('./controllers/authtestcontroller')
var user = require('./controllers/usercontroller')
var sequelize = require('./db')
var bodyParser = require('body-parser')
var log = require('./controllers/logcontroller');

sequelize.sync(); // to reset tables, put {force:true} here AND DON'T FORGET TO REMOVE AFTER YOU RESTART SERVER

app.use(bodyParser.json());

// var cors = require('cors')

// app.use(cors())

app.use(require('./middleware/headers'));
            

app.use('/user', user);



app.use(require('./middleware/validate-session'));
app.use('/authtest', authTest);

app.use('/log', log);


app.listen(process.env.PORT,() => console.log(`App is listening on ${process.env.PORT}'.`));


   