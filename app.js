require('dotenv').config();

var express = require('express'); 
var app = express();
var authTest = require('./controllers/authtestcontroller')
var user = require('./controllers/usercontroller')
var sequelize = require('./db')
var bodyParser = require('body-parser')
var log = require('./controllers/logcontroller');

sequelize.sync();

app.use(bodyParser.json());

// var cors = require('cors')

// app.use(cors())

app.use(require('./middleware/headers'));
            

app.use('/user', user);



app.use(require('./middleware/validate-session'));
app.use('/authtest', authTest);

app.use('/log', log);


app.listen(3000, function(){
    console.log('Hey woman!!!')
   });


   