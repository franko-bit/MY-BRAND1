const exp = require("express");
const app = exp();

const mongoosee = require("mongoose");
const booo = require("./controll/controller.js");

mongoosee.connect(
  "mongodb://localhost:27017/mustDone",
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (err) {
      console.log(err);
    }
    app.use(exp.json());
    app.get("/bro", booo.GetModel);
    app.post("/baba", booo.createModels);
    app.get("/baba/:_id", booo.findModel);
    app.patch("/baba/:_id", booo.updateModel);
    app.delete("/baba/:_id", booo.deleteModel);
    app.listen(3000, () => {
      console.log("wow");
    });
  }
);
