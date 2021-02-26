import { apikey } from "./apikey";

const owmRootUrl = `https://api.openweathermap.org/data/2.5/`;
const weatherUrl = `${owmRootUrl}weather?`;
const oneCallUrl = `${owmRootUrl}onecall?`;

export const getCurrentWeather = (location, tempScale) => {
  let url;
  if (!!location.lat && !!location.lon) {
    url = `${weatherUrl}lat=${location.lat}&lon=${location.lon}&units=${tempScale}&appid=${apikey}`;
  } else if (!!location.zipcode) {
    url = `${weatherUrl}zip=${location.zipcode},${location.countryCode}&units=${tempScale}&appid=${apikey}`;
  } else if (!!location.city) {
    url = `${weatherUrl}q=${location.city},${location.countryCode}&units=${tempScale}&appid=${apikey}`;
  } else {
    console.log("No Data");
  }

  return fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((myJson) => {
      if (myJson.cod === "404" && myJson.message === "city not found") {
        throw new Error(myJson.message);
      }

      return {
        weatherData: myJson,
      };
    });
};

export const getDailyWeather = (location, tempScale) => {
  let url;
  if (!!location.lat && !!location.lon) {
    url = `${oneCallUrl}lat=${location.lat}&lon=${location.lon}&units=${tempScale}&exclude=minutely&appid=${apikey}`;
  } else if (!!location.zipcode) {
    url = `${oneCallUrl}zip=${location.zipcode},${location.countryCode}&units=${tempScale}&appid=${apikey}`;
  } else if (!!location.city) {
    url = `${oneCallUrl}q=${location.city},${location.countryCode}&units=${tempScale}&appid=${apikey}`;
  } else {
    console.log("No Data");
  }

  return fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((myJson) => {
      if (myJson.cod === "404" && myJson.message === "city not found") {
        throw new Error(myJson.message);
      }

      return {
        dailyWeatherData: myJson,
      };
    });
};
