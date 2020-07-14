import { SET_CURRENT_PAGE, SET_LOCATION_CITY, SET_LOCATION_ZIP, SET_STATE, REFRESH, LOADING_SCREEN, SET_NEW_LOCATION, ADD_NEW_LOCATION, UPDATE_LOCATION, CHANGE_UNITS, CHANGE_THEME, SET_LOCATION_NAME, SET_CURRENT_WEATHER, SET_MORE_ABOUT_TODAY, SET_HOURLY_WEATHER, SET_DAILY_WEATHER, REMOVE_LOCATION } from '../Actions/Actions';
import {weatherUnit, theme} from '../../Constants';

const windArr = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];

function reducer( state={}, action) {

    switch(action.type) {

        case SET_STATE:

            if (!action.state.reducer.locationName) {
                return {
                    ...initialState
                };
            } else {
                return {
                    ...action.state.reducer,
                };
            }

        case REFRESH:
            return {
                ...state,
                refreshing: true,
            };

        case LOADING_SCREEN:

            return {
                ...state,
                loading: true,
            };

        case SET_NEW_LOCATION:
            return {
                ...state,
                location: {
                    lat: action.location.latitude,
                    lon: action.location.longitude,
                }
            };

        case REMOVE_LOCATION:
            return {
                ...initialState
            }

        case SET_LOCATION_CITY:
            return {
                ...state,
                location: {
                    city: action.cityName,
                }
            }

        case SET_LOCATION_ZIP:
            return {
                ...state,
                location: {
                    zipcode: action.zipcode,
                }
            }

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
                location: {
                    lat: action.weatherData.coord.lat,
                    lon: action.weatherData.coord.lon,
                },
                locationName: action.weatherData.name,
            };

        case SET_CURRENT_WEATHER:
            return {
                ...state,
                currentWeather: action.currentWeather
            };

        case SET_HOURLY_WEATHER:
            return {
                ...state,
                hourlyWeatherData: action.hourlyWeatherData,
            };

        case SET_DAILY_WEATHER:
            
            return {
                ...state,
                dailyWeatherData: action.dailyWeatherData,
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
                refreshing: false,
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
                },
            };

        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }

        default:
            return state;
    }
}

export const initialState = {
    allLocations: [],
    currentPage: null,
    locationName: null,
    weatherUnit: weatherUnit.IMPERIAL,
    theme: theme.DARK,
    location: { 
        lat: null,
        lon: null,
        zipcode: null,
        city: null
    },
    geocode:null,
    errorMessage:"",
    currentWeather: {
    },
    moreAboutToday: {
    },
    refreshing: false,
    loading: false
}

export default reducer;