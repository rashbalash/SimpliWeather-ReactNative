import {
  SET_CURRENT_PAGE,
  SET_LOCATION_CITY,
  SET_LOCATION_ZIP,
  SET_STATE,
  REFRESH,
  LOADING_SCREEN,
  SET_NEW_LOCATION,
  CHANGE_UNITS,
  CHANGE_THEME,
  SET_LOCATION_NAME,
  SET_CURRENT_WEATHER,
  SET_MORE_ABOUT_TODAY,
  SET_HOURLY_WEATHER,
  SET_DAILY_WEATHER,
  REMOVE_LOCATION,
  SET_WEATHER_ALERTS,
  CLEAR_WEATHER_ALERTS,
  UPDATE_CURRENT_LOCATION,
  SHOW_THEME_ACTION,
  SHOW_UNIT_ACTION,
  SET_DEFAULT_COUNTRY_CODE,
  SHOW_ALL_LOCATIONS_ACTION,
  UPDATE_LOCATION_ORDER,
} from "../Actions/Actions";
import { weatherUnit, theme } from "../../globalConstants";

function reducer(state = {}, action) {
  let newLocation, newLocations;

  switch (action.type) {
    case SET_STATE:
      return {
        ...initialState,
        ...action.state.reducer,
      };

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

    case SET_DEFAULT_COUNTRY_CODE:
      return {
        ...state,
        defaultCountryCode: action.countryCode,
      };

    case REMOVE_LOCATION:
      let setInReducer = false;

      newLocations = state.allLocations.reduce(
        (newLocationArr, oneLocation, index) => {
          if (index !== action.currentPage) {
            newLocationArr.push(oneLocation);
          }
          if (
            index === action.currentPage &&
            oneLocation.isCurrentLocation === true
          ) {
            setInReducer = true;
          }
          return newLocationArr;
        },
        []
      );

      const setCurrentLocationRemoved = setInReducer
        ? true
        : !state.currentLocationUsed;

      let newCurrentPage =
        action.currentPage >= newLocations.length
          ? action.currentPage - 1
          : action.currentPage;
      newCurrentPage = newCurrentPage < 0 ? 0 : newCurrentPage;

      return {
        ...state,
        allLocations: newLocations,
        currentPage: newCurrentPage,
        currentLocationUsed: !setCurrentLocationRemoved,
      };

    case SET_NEW_LOCATION:
      newLocation = {
        lat: action.location.latitude,
        lon: action.location.longitude,
        isCurrentLocation: true,
      };

      return {
        ...state,
        currentLocationUsed: true,
        allLocations: [...state.allLocations, newLocation],
        lastCurrentLocation: action.location,
      };

    case UPDATE_CURRENT_LOCATION:
      const updatedLocations = state.allLocations.reduce(
        (newLocationArr, oneLocation, index) => {
          if (!oneLocation.isCurrentLocation) {
            newLocationArr.push(oneLocation);
          } else {
            newLocationArr.push({
              ...oneLocation,
              lat: action.location.latitude,
              lon: action.location.longitude,
            });
          }
          return newLocationArr;
        },
        []
      );

      return {
        ...state,
        allLocations: updatedLocations,
        lastCurrentLocation: action.location,
      };

    case SET_LOCATION_CITY:
      newLocation = {
        city: action.cityName,
        countryCode: action.countryCode,
        isCurrentLocation: false,
      };

      return {
        ...state,
        allLocations: [...state.allLocations, newLocation],
      };

    case SET_LOCATION_ZIP:
      newLocation = {
        zipcode: action.zipcode,
        countryCode: action.countryCode,
        isCurrentLocation: false,
      };

      return {
        ...state,
        allLocations: [...state.allLocations, newLocation],
      };

    case CHANGE_UNITS:
      return {
        ...state,
        weatherUnit:
          state.weatherUnit === weatherUnit.IMPERIAL
            ? weatherUnit.METRIC
            : weatherUnit.IMPERIAL,
      };

    case CHANGE_THEME:
      return {
        ...state,
        theme: state.theme === theme.LIGHT ? theme.DARK : theme.LIGHT,
      };

    case SHOW_THEME_ACTION:
      return {
        ...state,
        showThemeAction: state.showThemeAction === true ? false : true,
      };

    case SHOW_UNIT_ACTION:
      return {
        ...state,
        showUnitAction: state.showUnitAction === true ? false : true,
      };

    case SHOW_ALL_LOCATIONS_ACTION:
      return {
        ...state,
        showAllLocationsAction:
          state.showAllLocationsAction === true ? false : true,
      };

    case UPDATE_LOCATION_ORDER:
      const orderOfLocations = action.newLocationOrder.map((location) => {
        return location.locationName;
      });

      const newLocationList = state.allLocations.sort(function (a, b) {
        return (
          orderOfLocations.indexOf(a.name) - orderOfLocations.indexOf(b.name)
        );
      });

      return {
        ...state,
        allLocations: newLocationList,
      };

    case SET_LOCATION_NAME:
      newLocations = state.allLocations.reduce(
        (newLocationArr, oneLocation, index) => {
          if (index !== action.currentPage) {
            newLocationArr.push(oneLocation);
          } else if (
            oneLocation.isCurrentLocation === false &&
            oneLocation.hasOwnProperty("city")
          ) {
            console.log(oneLocation);
            newLocationArr.push({
              ...oneLocation,
              name: oneLocation.city,
              lat: action.weatherData.coord.lat,
              lon: action.weatherData.coord.lon,
            });
          } else {
            newLocationArr.push({
              ...oneLocation,
              name: action.weatherData.name,
              lat: action.weatherData.coord.lat,
              lon: action.weatherData.coord.lon,
            });
          }
          return newLocationArr;
        },
        []
      );

      return {
        ...state,
        allLocations: newLocations,
      };

    case SET_CURRENT_WEATHER:
      newLocations = state.allLocations.reduce(
        (newLocationArr, oneLocation, index) => {
          if (index !== action.currentPage) {
            newLocationArr.push(oneLocation);
          } else {
            newLocationArr.push({
              ...oneLocation,
              currentWeather: action.currentWeather,
            });
          }
          return newLocationArr;
        },
        []
      );

      return {
        ...state,
        allLocations: newLocations,
      };

    case SET_HOURLY_WEATHER:
      newLocations = state.allLocations.reduce(
        (newLocationArr, oneLocation, index) => {
          if (index !== action.currentPage) {
            newLocationArr.push(oneLocation);
          } else {
            newLocationArr.push({
              ...oneLocation,
              hourlyWeatherData: action.hourlyWeatherData,
            });
          }
          return newLocationArr;
        },
        []
      );

      return {
        ...state,
        allLocations: newLocations,
      };

    case SET_DAILY_WEATHER:
      newLocations = state.allLocations.reduce(
        (newLocationArr, oneLocation, index) => {
          if (index !== action.currentPage) {
            newLocationArr.push(oneLocation);
          } else {
            newLocationArr.push({
              ...oneLocation,
              dailyWeatherData: action.dailyWeatherData,
            });
          }
          return newLocationArr;
        },
        []
      );

      return {
        ...state,
        allLocations: newLocations,
      };

    case SET_MORE_ABOUT_TODAY:
      newLocations = state.allLocations.reduce(
        (newLocationArr, oneLocation, index) => {
          if (index !== action.currentPage) {
            newLocationArr.push(oneLocation);
          } else {
            newLocationArr.push({
              ...oneLocation,
              moreAboutToday: action.moreAboutToday,
            });
          }
          return newLocationArr;
        },
        []
      );

      return {
        ...state,
        refreshing: false,
        allLocations: newLocations,
      };

    case SET_WEATHER_ALERTS:
      newLocations = state.allLocations.reduce(
        (newLocationArr, oneLocation, index) => {
          if (index !== action.currentPage) {
            newLocationArr.push(oneLocation);
          } else {
            newLocationArr.push({
              ...oneLocation,
              weatherAlerts: action.weatherAlerts,
            });
          }
          return newLocationArr;
        },
        []
      );

      return {
        ...state,
        allLocations: newLocations,
      };

    case CLEAR_WEATHER_ALERTS:
      newLocations = state.allLocations.reduce(
        (newLocationArr, oneLocation, index) => {
          if (index !== action.currentPage) {
            newLocationArr.push(oneLocation);
          } else {
            newLocationArr.push({
              ...oneLocation,
              weatherAlerts: action.weatherAlerts,
            });
          }
          return newLocationArr;
        },
        []
      );

      return {
        ...state,
        allLocations: newLocations,
      };

    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage,
      };

    default:
      return state;
  }
}

export const initialState = {
  allLocations: [],
  currentPage: 0,
  currentLocationUsed: false,
  lastCurrentLocation: undefined,
  weatherUnit: weatherUnit.IMPERIAL,
  theme: theme.DARK,
  refreshing: false,
  loading: false,
  showUnitAction: true,
  showThemeAction: true,
  showAllLocationsAction: true,
  defaultCountryCode: "US",
};

export default reducer;
