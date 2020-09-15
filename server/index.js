const exp = require("express");
const mongoosee = require("mongoose");
const app = exp();
const contro = require("./controller/controller.js");
const controll = require("./controller/controllerArticle.js");
mongoosee.connect(
  "mongodb://localhost:27017/My_Bland",
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (err) {
      app.send(err);
    }
    const PORT = 3000;
    app.use(exp.json());
    app.get("/queries", contro.GetQuery);
    app.post("/queries", contro.createQuery);
    app.get("/queries/:_id", contro.findQuery);
    app.get("/blog", controll.GetArticle);
    app.post("/blog", controll.createArticle);
    app.get("/blog/:_id", controll.findArticle);

    app.listen(PORT, () => {
      console.log("Server running on port ", PORT);
    });
  }
);
