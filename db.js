var mysql = require('mysql');
var db_config = {
  host: '127.0.0.1',
  user: 'root',
  password: 'wajdi1991',
  database: 'webapp'
};

var connection;

function handleDisconnection(){
  connection = mysql.createConnection(db_config);
  connection.connect(function(err){
    if(err){
      console.log("error when connecting",err);
      setTimeout(handleDisconnection,2000);
    };
  });

  connection.on('error',function(err){
    if(err.code === 'PROTOCOL_CONNECTION_LOST'){
      handleDisconnection();
    }else {
      throw err;
    }
  });
}

handleDisconnection();

module.exports = connection;
