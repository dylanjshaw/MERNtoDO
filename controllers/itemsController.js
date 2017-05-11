var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Items = require('../models/items');

module.exports = function(app) {

  // app.use(bodyParser.json());
  // app.use(bodyParser.urlencoded({ extended: true }));

  app.get('/', function(req, res){
    res.send('whats up world');
  });
  //landing page

  app.get('/items/:name', function(req, res){
    Items.find({user: req.params.name}, function(err, items){
      res.send(items);
    });
  });
  //send all items associated with user

  app.get('/items/all', function(req, res){
    Items.find(function(err, items){
      res.send(items);
    });
  });
  //send all items

  app.get('/item/:id', function(req, res){
    Items.findById(req.params.id, function(err, item){
      res.send(item);
    });
  });
}
  //send an item via its ID

    // Items.findById({_id: req.params.id}, function(err, item){
    //   if (err) throw err;
    //   res.send(item);
    // });
