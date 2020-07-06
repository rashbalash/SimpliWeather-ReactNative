// Action Constants
export const GET_NEW_LOCATION = 'GET_NEW_LOCATION';
export const SET_NEW_LOCATION = 'SET_NEW_LOCATION';
export const UPDATE_LOCATION = 'UPDATE_LOCATION';
export const CHANGE_UNITS = 'CHANGE_UNITS';
export const CHANGE_THEME = 'CHANGE_THEME';
export const SET_LOCATION_NAME = 'SET_LOCATION_NAME';
export const SET_CURRENT_WEATHER = 'SET_CURRENT_WEATHER';
export const SET_HOURLY_WEATHER = 'SET_HOURLY_WEATHER';
export const SET_DAILY_WEATHER = 'SET_DAILY_WEATHER';
export const SET_MORE_ABOUT_TODAY = 'SET_MORE_ABOUT_TODAY';
export const REFRESH = 'REFRESH';
export const LOADING_SCREEN = 'LOADING_SCREEN';
export const SET_STATE = 'SET_STATE';
export const START_APP = 'START_APP';

// Action Creators
export function startApp() {
    return {
        type: START_APP,
    }
}

export function setState(state) {
    return {
        type: SET_STATE,
        state
    }
}

export function refresh() {
    return {
        type: REFRESH,
    }
}

export function loadingScreen() {
    return {
        type: LOADING_SCREEN,
    }
}

export function getNewLocation() {
    return {
        type: GET_NEW_LOCATION,
    }
}

export function setNewLocation(location) {
    return {
        type: SET_NEW_LOCATION,
        location
    }
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

export function setCurrentWeather(currentWeather) {
    return {
        type: SET_CURRENT_WEATHER,
        currentWeather
    }
}

export function setHourlyWeather(hourlyWeatherData) {
    return {
        type: SET_HOURLY_WEATHER,
        hourlyWeatherData
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