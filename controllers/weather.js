const config = require("../config/config");
const axios = require("axios");

exports.getWeather = () => {
  let api_key = config.owm_api_key;
  let city = "knoxville";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${api_key}`;

  return axios
    .get(url)
    .then(res => res.data)
    .catch(err => {
      //custom console
      console.log(err);
    });
};
