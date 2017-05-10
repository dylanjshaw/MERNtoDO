var express = require('express');
var app = express();

var mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1/todos');

var port = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');


var itemsController = require('./controllers/itemsController');
var usersController = require('./controllers/usersController');

itemsController(app);
usersController(app);

app.listen(port);
