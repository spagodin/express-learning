const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("./pages/beer");
});

module.exports = router;
