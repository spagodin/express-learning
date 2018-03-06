const express = require("express");
const weather = require("../controllers/weather");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("./pages/weather");
});

router.post("/", (req, res) => {
  let cityName = req.body.city;
  weather
    .getWeather(cityName)
    .then(wdata => {
      res.render("./pages/weather", {
        city: wdata.city,
        temp: wdata.temp
      });
    })
    .catch(err => {
      res.send(err);
    });
});

module.exports = router;
