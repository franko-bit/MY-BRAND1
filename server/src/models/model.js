const mongoosee = require("mongoose");
const schema = new mongoosee.Schema({
  fname: String,
  Email: String,
  phone: String,
  subject: String,
  message: String,
});
module.exports = mongoosee.model("post", schema);
