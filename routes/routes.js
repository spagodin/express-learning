const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("./pages/home");
});

router.use("/beer", require("./beer"));
router.use("/weather", require("./weather"));

module.exports = router;
