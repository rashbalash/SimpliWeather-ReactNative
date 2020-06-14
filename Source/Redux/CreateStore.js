import { createStore} from 'redux';
import weatherApp from './Reducers/CombineReducers';

const store = createStore(weatherApp);

export default store;