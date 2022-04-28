var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var apiSchema = new Schema({
  api: String,
  Description: String,
  Link: String,
  Category: String,
});

module.exports = mongoose.model("apis", apiSchema);
