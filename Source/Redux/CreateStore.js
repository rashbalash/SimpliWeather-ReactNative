import { createStore, applyMiddleware} from 'redux';
import weatherApp, { initialState } from './Reducers/CombineReducers';
import createWeatherMiddleware from './Middleware/weatherMiddleware';

const store = createStore(weatherApp, initialState, applyMiddleware(createWeatherMiddleware));

export default store;