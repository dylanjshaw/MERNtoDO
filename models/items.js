var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var itemSchema = new Schema({
  user: String,
  item: String,
  isDone: Boolean,
  hasAttachment: Boolean
});


var Items = mongoose.model('Items', itemSchema);


module.exports = Items;
