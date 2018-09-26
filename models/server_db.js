var db = require('../db.js');

save_user_information = (data) => new Promise((resole,reject)=>{
  db.query('INSERT INTO lottery_information SET ?',data,function(err,results,fields){
    if(err){
      reject('could not insert');
    }
    resole('succesful');
  });
})

module.exports = {
  save_user_information
}
