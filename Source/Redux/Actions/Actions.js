// Action Constants
export const GET_NEW_LOCATION = 'GET_NEW_LOCATION';
export const SET_NEW_LOCATION = 'SET_NEW_LOCATION';
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
export const SET_LOCATION_ZIP = 'SET_LOCATION_ZIP';
export const SET_LOCATION_CITY = 'SET_LOCATION_City';
export const REMOVE_LOCATION = 'REMOVE_LOCATION';
export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';

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

export function setLocationZip(zipcode) {
    return {
        type: SET_LOCATION_ZIP,
        zipcode
    }
}

export function setLocationCity(cityName) {
    return {
        type: SET_LOCATION_CITY,
        cityName
    }
}

export function removeLocation(currentPage) {
    return {
        type: REMOVE_LOCATION,
        currentPage
    }
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

export function setLocationName(weatherData, currentPage) {
    return {
        type: SET_LOCATION_NAME,
        weatherData,
        currentPage
    }
}

export function setCurrentWeather(currentWeather, currentPage) {
    return {
        type: SET_CURRENT_WEATHER,
        currentWeather,
        currentPage
    }
}

export function setHourlyWeather(hourlyWeatherData, currentPage) {
    return {
        type: SET_HOURLY_WEATHER,
        hourlyWeatherData,
        currentPage
    }
}

export function setDailyWeather(dailyWeatherData, currentPage) {
    return {
        type: SET_DAILY_WEATHER,
        dailyWeatherData,
        currentPage
    }
}

export function setMoreAboutToday(weatherData, currentPage) {
    return {
        type: SET_MORE_ABOUT_TODAY,
        weatherData,
        currentPage
    }
}

export function setCurrentPage(currentPage) {
    return {
        type: SET_CURRENT_PAGE,
        currentPage
    }
}