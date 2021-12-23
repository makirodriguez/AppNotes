const express = require('express'),
      path = require('path'),
      morgan = require('morgan'),
      mysql = require('mysql'),
      cors = require('cors'),
      util = require('util')
      bodyParser = require('body-parser')
      myConnection = require('express-myconnection');


const app = express();



// importing routes
const folderRoutes = require('./routes/item');

// settings
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.json());

const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'contrasena',
  port: 3306,
  database: 'task'
});



// routes
app.use('/', folderRoutes);


// starting the server
app.listen(app.get('port'), () => {
  console.log(`server on port ${app.get('port')}`);
});
