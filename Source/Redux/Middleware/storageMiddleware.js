import { AsyncStorage } from 'react-native';
import { setState, START_APP, refresh } from '../Actions/Actions';
import { initialState } from '../Reducers/Reducer';

const stateKey = 'New State';

export default createStorageMiddleware = store => next => {   

    return async (action) => {
        // update the state first
        next(action);

        if (action.type == START_APP) {
            store.dispatch(setState({...initialState, ...retrieveData(stateKey)}));
            return;
        }

        storeData(stateKey, store.getState());

        return;
    };
};

const storeData = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      // Error saving data
    }
};

const retrieveData = async (key) => {
    try {
        const value = await AsyncStorage.getItem(key);
        value = JSON.parse(value);
        if (value !== null) {
            // We have data!!
            console.log(value);
        }
    } catch (error) {
        // Error retrieving data
    }
};