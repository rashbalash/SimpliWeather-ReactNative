import { CHANGE_UNITS, setMoreAboutToday, setLocationName, setCurrentWeather, setHourlyWeather, setDailyWeather } from '../Actions/Actions';
import { getCurrentWeather, getDailyWeather } from '../../API/weatherAPI';

export default createMiddleware = store => next => action => {
    // update the state first
    next(action);

    if (action.type !== CHANGE_UNITS) {
      return;
    }

    const currentReducerState = store.getState().reducer;

    const thunderstorm = [200, ];
    const drizzle;
    const rain;
    const snow;
    const atmosphere;
    const clear = [800];
    const clouds = [801, 802, 803, 804];

    getCurrentWeather(currentReducerState.location, currentReducerState.weatherUnit).then(weatherData => {    
            store.dispatch(setLocationName(weatherData.weatherData));
            store.dispatch(setCurrentWeather(weatherData.weatherData));
            store.dispatch(setMoreAboutToday(weatherData.weatherData));
        }
    ).then( () => {

        const dailyReducerState = store.getState().reducer;

            getDailyWeather(dailyReducerState.location, dailyReducerState.weatherUnit).then(dailyWeatherData => {
                store.dispatch(setHourlyWeather(dailyWeatherData.dailyWeatherData));
                store.dispatch(setDailyWeather(dailyWeatherData.dailyWeatherData));    
            }
        );
    });
    
    
};