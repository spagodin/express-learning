const express = require("express");
const weather = require("../controllers/weather");
const router = express.Router();

router.get("/", (req, res) => {
  //getWeather returns a promise so I need to handle it.
  weather
    .getWeather()
    .then(wdata => {
      res.render("./pages/weather", {
        city: wdata.name,
        temp: wdata.main.temp
      });
      //logging just to make sure I have the data
      console.log(wdata);
    })
    .catch(err => {
      console.log(err);
    });
});

module.exports = router;
