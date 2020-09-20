const { query } = require("express");
const exp = require("express");
const contro = require("../controller/Queriescontroller.js");
const router = exp.Router();
router.get("/queries", contro.GetQuery);
router.post("/queries", contro.createQuery);
router.get("/queries/:_id", contro.findQuery);
module.exports = router;
