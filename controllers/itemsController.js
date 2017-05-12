var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Items = require('../models/items');

module.exports = function(app) {

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.get('/items', function(req, res){
    mongoose.model('Items').find({}, function(err, items){
      res.render('itemsList', {items: items});
    });
  });
  //items list

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

  app.post('/items', function(req, res){
    var newItem = new Items({item: req.body.item});
    newItem.save();
    res.redirect('/items');
  });

  app.get('/delete/item/:id', function(req, res){
    Items.findOneAndRemove({_id: req.params.id}, function(err, item){
      if(err){
        console.log(err)
        return res.status(500).send();
      }
        return res.status(200).send();
    });
    res.redirect('/items');
  });
}
  //send an item via its ID -- works
