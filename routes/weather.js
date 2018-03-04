const express = require('express');
const weather = require('../controllers/weather');
const router = express.Router();

router.get('/', (req, res) => {
  //getWeather returns a promise so I need to handle it.
  let data = weather.getWeather()
    .then( data => {
      res.render('./pages/weather', {
        city: data.city, 
        temp: data.temp
      });
      //logging just to make sure I have the data
      console.log(data)
    })
    .catch(err => {
      console.log(err)
    })
  
})

module.exports = router;