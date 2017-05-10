var mongoose = require('mongoose');
var Items = require('../models/items');


module.exports = function(app) {

  app.get('/', function(req, res){
    res.send('whats up world');
  });

  // app.get('/items/all', function(req, res){
  //   mongoose.model('items').find(function(err, items){
  //     res.send(items);
  //   });
  // });

}
