const comment = require("../models/comment.js");
exports.Getcomment = async (req, res) => {
  const modules = await comment.find();
  res.status(200).json({ data: modules });
};
exports.createComment = async (req, res) => {
  const data = new comment(req.body);
  await data.save((err, data) => {
    console.log(data);
    res.status(200).json(data);
  });
};
exports.findcomment = async (req, res) => {
  const modulees = await comment.findById(req.params._id);
  res.status(200).json({ data: modulees });
};
exports.deleteComment = async (req, res) => {
  const modulees = await comment.findByIdAndDelete(req.params._id);
  res.status(200).json({ data: modulees });
};
