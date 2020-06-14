import { combineReducers } from 'redux';
import reducer, { initialState as reducerInitialState } from './Reducer';

const weatherApp = combineReducers({
    reducer,
});

export const initialState = {
    reducer: reducerInitialState,
}

export default weatherApp;