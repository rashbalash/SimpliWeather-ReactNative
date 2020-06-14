import { CHANGE_UNITS } from '../Actions/Actions';
import { getCurrentWeather, getDailyWeather } from '../../API/weatherAPI';

export default createMiddleware = store => next => action => {
    // update the state first
    next(action);
    // if this was a todo toggle and we have only completed tasks, then we play a sound
    if (action.type !== CHANGE_UNITS) {
      return;
    }

    const reducerState = store.getState().reducer;

    getCurrentWeather(reducerState.location, reducerState.weatherUnit).then(weatherData => console.log(weatherData));
    getDailyWeather(reducerState.location, reducerState.weatherUnit).then(weatherData => console.log(weatherData));
    
};