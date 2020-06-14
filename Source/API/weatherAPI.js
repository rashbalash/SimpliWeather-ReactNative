import { apikey } from './apikey';

const owmRootUrl = `https://api.openweathermap.org/data/2.5/`;
const forecastUrl = `${owmRootUrl}forecast?`;
const weatherUrl = `${owmRootUrl}weather?`;

export const getCurrentWeather = (location, tempScale) => {

    console.log(location, tempScale);

    let url;
    if (!!location.lat && !!location.lon)  {
        url = `${weatherUrl}lat=${ location.lat }&lon=${ location.lon }&units=${ tempScale }&appid=${  apikey }`;
    } else if (!!location.zipcode) {
        url = `${weatherUrl}zip=${ location.zipcode },${ "US" }&units=${ tempScale }&appid=${  apikey }`;
    } else if (!!location.city) {
        url = `${weatherUrl}q=${ location.city },${ "US" }&units=${ tempScale }&appid=${  apikey }`;
    } else {
        console.log("No Data");
    } 

    console.log(url);

    return fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((myJson) => {
            return {
                weatherData: myJson,
            };
        });
  }

export const getDailyWeather = (location, tempScale) => {

    let url;
    if (!!location.lat && !!location.lon)  {
        url = `${forecastUrl}lat=${ location.lat }&lon=${ location.lon }&units=${ tempScale }&appid=${  apikey }`;
    } else if (!!location.zipcode) {
        url = `${forecastUrl}zip=${ location.zipcode },${ "US" }&units=${ tempScale }&appid=${  apikey }`;
    } else if (!!location.city) {
        url = `${forecastUrl}q=${ location.city },${ "US" }&units=${ tempScale }&appid=${  apikey }`;
    }    
    else {
        console.log("No Data");
    }
    return fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((myJson) => {
            return {
                dailyWeatherData: myJson,
            };
        });
}
