const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();
const bcrypt = require("bcrypt");
app.use(express.json());
// app.get("/api", (req, res) => {
//   res.json({
//     message: "welcome to the api",
//   });
// });
exports.postsss = async (req, res) => {
  const post = {
    title: req.body.title,
    body: req.body.body,
    Auth: req.userData.user,
  };

  res.status(200).json(post);
};
exports.loginn = async (req, res) => {
  //mock user
  const user = {
    id: 1,
    username: "brad",
    email: "ngabofrank375@gmail.com",
    password: "$2b$11$pnuPpac/UHzdTMbCZ.iMweUu2Nbulo5vUi2az18F/GCEVzHobl2Lu",
  };
  if (req.body.email !== user.email) {
    return res.status(401).json({
      status: 401,
      message: "Wrong email",
    });
  }

  const isValid = await bcrypt.compare(req.body.password, user.password);
  if (!isValid) {
    return res.status(401).json({
      status: 401,
      message: "Wrong email or password",
    });
  }
  const token = jwt.sign(
    {
      user: user,
    },
    "secretkey"
  );
  res.json({
    token: token,
  });
};
// module.exports = app;
