var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Items = require('../models/items');

module.exports = function(app) {

  // app.use(bodyParser.json());
  // app.use(bodyParser.urlencoded({ extended: true }));

  app.get('/', function(req, res){
    res.send('whats up world');
  });
  //landing page -- works

  app.get('/items/all', function(req, res){
    mongoose.model('Items').find({}, function(err, items){
      res.send(items);
    });
  });
  //send all items -- works

  app.get('/items/user/:name', function(req, res){
     Items.find({user: req.params.name}, function(err, items){
      res.send(items);
    });
  });
  //send all items associated with user -- works


  app.get('/item/:id', function(req, res){
    Items.findById(req.params.id, function(err, item){
      res.send(item);
    });
  });
}
  //send an item via its ID -- works

    // Items.findById({_id: req.params.id}, function(err, item){
    //   if (err) throw err;
    //   res.send(item);
    // });
