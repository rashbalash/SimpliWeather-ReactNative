import { CHANGE_UNITS, REFRESH, setMoreAboutToday, setLocationName, setCurrentWeather, setHourlyWeather, setDailyWeather } from '../Actions/Actions';
import { getCurrentWeather, getDailyWeather } from '../../API/weatherAPI';
import {weatherUnit } from '../../Constants';

const validActions = [ CHANGE_UNITS, REFRESH ];

const idDictionary = {
    thunderstorm: [200, 201, 202, 210, 211, 212, 221, 230, 231, 232], 
    drizzle: [300, 301, 302, 310, 311, 312, 313, 314, 321],
    lightRain: [500, 501, 520, 521],
    heavyRain: [502, 503, 504, 522, 531],
    freezingRain: [511],
    lightSnow: [600, 601, 611, 612, 613, 615, 616, 620],
    heavySnow: [602, 621, 622],
    atmosphere: [701, 711, 721, 731, 741, 751, 761, 762, 771], 
    tornado: [781], 
    clear: [800], 
    clouds: [801, 802, 803, 804]
};

const idToWeather = Object.entries(idDictionary).reduce(reverseIdDictionary, {});

export default createWeatherMiddleware = store => next => action => {
    // update the state first
    next(action);

    if (!validActions.includes(action.type) ) {
      return;
    }

    const currentReducerState = store.getState().reducer;

    for (let page = 0; page < currentReducerState.allLocations.length; ++page) {
        getCurrentWeather(currentReducerState.allLocations[page], currentReducerState.weatherUnit).then(weatherData => {  
            store.dispatch(setLocationName(weatherData.weatherData, page));
            dispatchMoreAboutToday(store, weatherData.weatherData, page);
            const dailyReducerState = store.getState().reducer;

            return getDailyWeather(dailyReducerState.allLocations[page], dailyReducerState.weatherUnit);
        }).then(dailyWeatherData => {
            dispatchCurrentData(store, dailyWeatherData.dailyWeatherData, page);
            dispatchHourlyData(store, dailyWeatherData.dailyWeatherData, page);
            dispatchDailyData(store, dailyWeatherData.dailyWeatherData, page);
        });
    }
};

function dispatchCurrentData(store, dailyWeatherData, currentPage) {

    var currentTime = dailyWeatherData.current.dt
    const sunrise = dailyWeatherData.current.sunrise;
    const sunset =  dailyWeatherData.current.sunset;
    var isDay = currentTime > sunrise && currentTime < sunset;

    const currentWeather = {
        temp: Math.round(dailyWeatherData.current.temp),
        condition: dailyWeatherData.current.weather[0].main,
        id: idToWeather[dailyWeatherData.current.weather[0].id],
        isDay,
        hi: Math.round(dailyWeatherData.daily[0].temp.max),
        lo: Math.round(dailyWeatherData.daily[0].temp.min),
    }

    store.dispatch(setCurrentWeather(currentWeather, currentPage));
}

function dispatchHourlyData(store, dailyWeatherData, currentPage) {

    const currentDaySunrise = dailyWeatherData.current.sunrise;
    const currentDaySunset =  dailyWeatherData.current.sunset;
    const nextDaySunrise = dailyWeatherData.daily[1].sunrise;

    let hourlyWeatherDataArr = [];

    for (var i = 0; i < dailyWeatherData.hourly.length; ++i) {
        
        var currentTime = dailyWeatherData.hourly[i].dt


        if (currentTime >= nextDaySunrise) {
            var isDay = true;
        } else {
            var isDay = currentTime > currentDaySunrise && currentTime < currentDaySunset;
        }

        var hour = new Date((currentTime) * 1000).getHours();
        
        var ifAmOrPm = hour >= 12 ? 'PM' : 'AM';

        hour = hour > 12 ? hour - 12 : hour;
        hour = hour === 0 ? hour + 12 : hour;
        
        hourlyWeatherDataArr.push(
            {
                hour: hour,
                amOrPm: ifAmOrPm,
                isDay: isDay,
                id: idToWeather[dailyWeatherData.hourly[i].weather[0].id],
                temperature: Math.round(dailyWeatherData.hourly[i].temp)
            }
        )
    };

    store.dispatch(setHourlyWeather(hourlyWeatherDataArr, currentPage));
};

function dispatchDailyData(store, dailyWeatherData, currentPage) {

    let dailyWeatherDataArr = [];

    for (var i = 0; i < dailyWeatherData.daily.length; ++i) {

        var day = new Date((dailyWeatherData.daily[i].dt) * 1000).toUTCString().slice(0, 3);

        dailyWeatherDataArr.push(
            {
                day: day,
                id: idToWeather[dailyWeatherData.daily[i].weather[0].id],
                hi: Math.round(dailyWeatherData.daily[i].temp.max),
                lo: Math.round(dailyWeatherData.daily[i].temp.min)
            }
        )
    };

    store.dispatch(setDailyWeather(dailyWeatherDataArr, currentPage));
};

const windArr = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];

function dispatchMoreAboutToday(store, weatherData, currentPage) {

    const state = store.getState();

    const precipitationUnit = state.weatherUnit === weatherUnit.IMPERIAL ? `Inches` : `Centimeters`;
    const windSpeedUnit = state.weatherUnit === weatherUnit.IMPERIAL ? `mph` : `kmh`;
    const sunrise = new Date(weatherData.sys.sunrise * 1000).getHours() + `:` + new Date(weatherData.sys.sunrise * 1000).getMinutes();
    let sunsetHour = new Date(weatherData.sys.sunset * 1000).getHours();
    sunsetHour = sunsetHour === 0 ? sunsetHour + 12 : sunsetHour;
    const sunset = sunsetHour > 12 ? (sunsetHour - 12)  + `:` + new Date(weatherData.sys.sunset * 1000).getMinutes(): sunsetHour  + `:` + new Date(weatherData.sys.sunset * 1000).getMinutes();

    const moreAboutTodayArr = {
        precipitation: weatherData.hasOwnProperty('rain') ? Math.round((weatherData.rain["1h"]*0.0393701)*10)/10 : 0,
        precipitationUnit: precipitationUnit,
        humidity: Math.round(weatherData.main.humidity),
        sunrise: sunrise,
        sunset: sunset,
        wind: Math.round(weatherData.wind.speed),
        windSpeedUnit: windSpeedUnit,
        windDirection: windArr[weatherData.wind.deg%8],
        pressure: weatherData.main.pressure
    };

    store.dispatch(setMoreAboutToday(moreAboutTodayArr, currentPage))
}

function reverseIdDictionary(accumulator, currentValue) {
    currentValue[1].forEach(value => {
      accumulator[value] = currentValue[0];
    });
      return accumulator;
  };
  