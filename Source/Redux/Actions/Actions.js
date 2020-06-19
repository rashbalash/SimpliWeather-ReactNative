// Action Constants
export const ADD_NEW_LOCATION = 'ADD_NEW_LOCATION';
export const UPDATE_LOCATION = 'UPDATE_LOCATION';
export const CHANGE_UNITS = 'CHANGE_UNITS';
export const CHANGE_THEME = 'CHANGE_THEME';
export const SET_LOCATION_NAME = 'SET_LOCATION_NAME';
export const SET_CURRENT_WEATHER = 'SET_CURRENT_WEATHER';
export const SET_HOURLY_WEATHER = 'SET_HOURLY_WEATHER';
export const SET_DAILY_WEATHER = 'SET_DAILY_WEATHER';
export const SET_MORE_ABOUT_TODAY = 'SET_MORE_ABOUT_TODAY';

// Action Creators
export function addNewLocation() {

}

export function updateLocation() {

}

export function changeUnits() {
    return {
        type: CHANGE_UNITS,
    }
}

export function changeTheme() {
    return {
        type: CHANGE_THEME,
    }
}

export function setLocationName(weatherData) {
    return {
        type: SET_LOCATION_NAME,
        weatherData
    }
}

export function setCurrentWeather(weatherData) {
    return {
        type: SET_CURRENT_WEATHER,
        weatherData
    }
}

export function setHourlyWeather(dailyWeatherData) {
    return {
        type: SET_HOURLY_WEATHER,
        dailyWeatherData
    }
}

export function setDailyWeather(dailyWeatherData) {
    return {
        type: SET_DAILY_WEATHER,
        dailyWeatherData
    }
}

export function setMoreAboutToday(weatherData) {
    return {
        type: SET_MORE_ABOUT_TODAY,
        weatherData
    }
}