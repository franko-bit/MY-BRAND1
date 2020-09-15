const exp = require("express");
const mongoosee = require("mongoose");
const app = exp();
const contro = require("./controller/controller.js");
mongoosee.connect(
  "mongodb://localhost:27017/queries",
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (err) {
      console.log(err);
    }
    app.use(exp.json());
    app.get("/take", contro.GetQuery);
    app.post("/upload", contro.createQuery);
    app.get("/take/:_id", contro.findQuery);

    app.listen(2000, () => {
      console.log("Now connected");
    });
  }
);
