var Users = require('../models/users');
module.exports = function(app) {

  app.get('/users/all', function(req, res){
    Users.find(function(err, users){
      res.send(users);
    });
  });
  //send all users -- works

}
