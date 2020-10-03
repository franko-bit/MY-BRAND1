const moduls = require("../models/model.js");
exports.GetModel = async (req, res) => {
  const modules = await moduls.find();
  res.send({ data: modules });
};
exports.createModels = async (req, res) => {
  const data = new moduls(req.body);

  await data.save((err, data) => {
    if (err) {
      console.log(err);
    }
    console.log(data);
    res.send(data);
  });
};
exports.findModel = async (req, res) => {
  const data = new moduls(req.headers);
  const modulees = await moduls.findById(req.params._id);
  res.send({ data: modulees });
};
exports.updateModel = async (req, res) => {
  const data = new moduls(req.headers);
  const modulees = await moduls.findById(req.params._id);
  Object.assign(modulees, req.headers);
  await data.save((err, data) => {
    if (err) {
      console.log(err);
    }
    res.send({ data: modulees });
  });
};
exports.deleteModel = async (req, res) => {
  const data = new moduls(req.headers);
  const modulees = await moduls.findById(req.params._id);
  await modulees.remove();
  res.send({ data: modulees });
};
