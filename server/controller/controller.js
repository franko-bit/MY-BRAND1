const moduls = require("../models/model.js");
exports.GetQuery = async (req, res) => {
  const modules = await moduls.find();
  res.send({ data: modules });
};
exports.createQuery = async (req, res) => {
  const data = new moduls(req.body);

  await data.save((err, data) => {
    if (err) {
      console.log(err);
    }
    console.log(data);
    res.send(data);
  });
};
exports.findQuery = async (req, res) => {
  const data = new moduls(req.body);
  const modulees = await moduls.findById(req.params._id);
  res.send({ data: modulees });
};
