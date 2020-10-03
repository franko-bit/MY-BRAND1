const mongoosee = require("mongoose");
const schema = new mongoosee.Schema({
  fname: String,
  lname: String,
});
module.exports = mongoosee.model("post", schema);
