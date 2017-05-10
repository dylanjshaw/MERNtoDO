var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var itemsSchema = new Schema({
  user: String,
  item: String,
  isDone: Boolean,
  hasAttachment: Boolean
});


var Items = mongoose.model('Items', itemsSchema);


module.exports = Items;
