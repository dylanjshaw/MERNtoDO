var mongoose = require('mongoose');
var Users = require('../models/users');


module.exports = function(app) {

  app.get('/users/all', function(req, res){
    mongoose.model('Users').find(function(err, users){
      res.send(users);
    });
  });

}
