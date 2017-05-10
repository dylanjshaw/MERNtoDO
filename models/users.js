var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var usersSchema = new Schema({
  firstname: String,
  //lastname: String,
});


var Users = mongoose.model('Users', usersSchema);


module.exports = Users;
