import { createStore, applyMiddleware} from 'redux';
import weatherApp, { initialState } from './Reducers/CombineReducers';
import createWeatherMiddleware from './Middleware/weatherMiddleware';
import createLocationMiddleware from './Middleware/locationMiddleware';
import createStorageMiddleware from './Middleware/storageMiddleware';
import { startApp } from './Actions/Actions';

const store = createStore(weatherApp, initialState, applyMiddleware(createWeatherMiddleware, createLocationMiddleware, createStorageMiddleware));

store.dispatch(startApp());

export default store;