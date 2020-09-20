const moduls = require("../models/model.js");
const { valid, QuerySchema } = require("../validation/validationQueries.js");
exports.GetQuery = async (req, res) => {
  const modules = await moduls.find();
  res.send({ data: modules });
};
exports.createQuery = async (req, res) => {
  const data = new moduls(req.body);
  try {
    const result = await QuerySchema.validateAsync(req.body, (err, data) => {
      if (err) {
        console.log("booooo");
      } else {
        console.log(data);
      }
    });
    await data.save((err, data) => {
      if (err) {
        console.log(err);
      }
      console.log(data);
      res.send(data);
    });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};
exports.findQuery = async (req, res) => {
  const data = new moduls(req.body);
  const modulees = await moduls.findById(req.params._id);
  res.send({ data: modulees });
};