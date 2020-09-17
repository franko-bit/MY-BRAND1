const exp = require("express");
const mongoosee = require("mongoose");
const upload = require("express-fileupload");
const app = exp();
const routQuery = require("./Router/queries.js");
const routBlog = require("./Router/RouterBlog.js");
mongoosee.connect(
  "mongodb://localhost:27017/My_Bland",
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (err) {
      console.log(err);
    }
    const PORT = 3000;
    app.use(exp.json());
    app.use(
      exp.urlencoded({
        extended: false,
      })
    );
    app.use(upload({ useTempFiles: true }));
    app.use(routQuery);
    app.use(routBlog);
    app.listen(PORT, () => {
      console.log("Server running on port ", PORT);
    });
  }
);
