const config = require("../config/config");
const axios = require("axios");

const cities = ["knoxville", "boston", "wilkes-barre", "frankfurt"];

const getWeather = cityName => {
  let api_key = config.owm_api_key;
  let city = cityName || "knoxville";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${api_key}`;

  return axios
    .get(url)
    .then(res => {
      console.log(`${res.data.name} is ${res.data.main.temp} degrees`);
      return {
        city: res.data.name,
        temp: res.data.main.temp
      };
    })
    .catch(err => {
      console.log(err.message);
    });
};

const getWeather2 = () => {
  cities.map(p => {
    getWeather(p);
  });
};

getWeather2();
