import { ADD_NEW_LOCATION, UPDATE_LOCATION, CHANGE_UNITS, CHANGE_THEME, SET_LOCATION_NAME, SET_CURRENT_WEATHER, SET_MORE_ABOUT_TODAY, SET_HOURLY_WEATHER, SET_DAILY_WEATHER } from '../Actions/Actions';
import {weatherUnit, theme} from '../../Constants';

const windArr = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];

function reducer( state={}, action) {

    switch(action.type) {
        case ADD_NEW_LOCATION:
            return state;
    
        case UPDATE_LOCATION:
            return state;

        case CHANGE_UNITS:
            return {
                ...state,
                weatherUnit: state.weatherUnit === weatherUnit.IMPERIAL ? weatherUnit.METRIC : weatherUnit.IMPERIAL,
            };

        case CHANGE_THEME:
            return {
                ...state,
                theme: state.theme === theme.LIGHT ? theme.DARK : theme.LIGHT,  
            };
        
        case SET_LOCATION_NAME:
            return {
                ...state,
                locationName: action.weatherData.name,
            }

        case SET_CURRENT_WEATHER:
            return {
                ...state,
                location: {
                    lat: action.weatherData.coord.lat,
                    lon: action.weatherData.coord.lon,
                },
                currentWeather: {
                    temp: Math.round(action.weatherData.main.temp),
                    condition: action.weatherData.weather[0].main,
                    hi: Math.round(action.weatherData.main.temp_max),
                    lo: Math.round(action.weatherData.main.temp_min),
                }
            };

        case SET_HOURLY_WEATHER:

            let hourlyWeatherData = [];

            for (var i = 0; i < action.dailyWeatherData.hourly.length; ++i) {
                
                var hour = new Date((action.dailyWeatherData.hourly[i].dt) * 1000).getHours();
                
                var ifAmOrPm = hour > 12 ? 'PM' : 'AM';

                hour = hour > 12 ? hour - 12 : hour;
                hour = hour === 0 ? hour + 12 : hour;
                
                hourlyWeatherData.push(
                    {
                        hour: hour,
                        amOrPm: ifAmOrPm,
                        condition: action.dailyWeatherData.hourly[i].weather.main,
                        temperature: Math.round(action.dailyWeatherData.hourly[i].temp)
                    }
                )
            };

            return {
                ...state,
                hourlyWeatherData: hourlyWeatherData,
            };

        case SET_DAILY_WEATHER:
            let dailyWeatherData = [];

            for (var i = 0; i < action.dailyWeatherData.daily.length; ++i) {

                var day = new Date((action.dailyWeatherData.daily[i].dt) * 1000).toUTCString().slice(0, 3);

                dailyWeatherData.push(
                    {
                        day: day,
                        condition: action.dailyWeatherData.daily[i].weather.main,
                        hi: Math.round(action.dailyWeatherData.daily[i].temp.max),
                        lo: Math.round(action.dailyWeatherData.daily[i].temp.min)
                    }
                )
            };

            return {
                ...state,
                dailyWeatherData: dailyWeatherData,
            };

        case SET_MORE_ABOUT_TODAY:

            const precipitationUnit = state.weatherUnit === weatherUnit.IMPERIAL ? `Inches` : `Centimeters`;
            const windSpeedUnit = state.weatherUnit === weatherUnit.IMPERIAL ? `mph` : `kmh`;

            var sunrise = new Date(action.weatherData.sys.sunrise * 1000).getHours() + `:` + new Date(action.weatherData.sys.sunrise * 1000).getMinutes();
            var sunsetHour = new Date(action.weatherData.sys.sunset * 1000).getHours();

            sunsetHour = sunsetHour === 0 ? sunsetHour + 12 : sunsetHour;
            var sunset = sunsetHour > 12 ? (sunsetHour - 12)  + `:` + new Date(action.weatherData.sys.sunset * 1000).getMinutes(): sunsetHour  + `:` + new Date(action.weatherData.sys.sunset * 1000).getMinutes();

            return {
                ...state,
                moreAboutToday: {
                    precipitation: action.weatherData.hasOwnProperty('rain') ? Math.round((action.weatherData.rain["1h"]*0.0393701)*10)/10 : 0,
                    precipitationUnit: precipitationUnit,
                    humidity: Math.round(action.weatherData.main.humidity),
                    sunrise: sunrise,
                    sunset: sunset,
                    wind: Math.round(action.weatherData.wind.speed),
                    windSpeedUnit: windSpeedUnit,
                    windDirection: windArr[action.weatherData.wind.deg%8],
                    pressure: action.weatherData.main.pressure,
                }
            };

        default:
            return state;
    }
}

export const initialState = {
    locationName: "",
    weatherUnit: weatherUnit.IMPERIAL,
    theme: theme.LIGHT,
    location: { 
        lat: "",
        lon: "",
        zipcode: "20852",
        city: ""
    },
    currentWeather: {
    },
    hourlyWeather: {
    },
    dailyWeather: {
    },
    moreAboutToday: {
    },
}

export default reducer;