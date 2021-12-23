util = require('util');
mysql = require('mysql');
const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'contrasena',
    port: 3306,
    database: 'task'
  });
  
  db.getConnection((err, connection) =>{
    if(err)
    console.log('Something went wrong during connection attemp');
    if(connection)
      connection.release();
    return;
  })
  
  db.query = util.promisify(db.query);

  module.exports = db;