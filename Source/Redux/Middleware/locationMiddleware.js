import { GET_NEW_LOCATION, setNewLocation, refresh, SET_LOCATION_ZIP, SET_LOCATION_CITY } from '../Actions/Actions';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

export default createLocationMiddleware = store => { 
    
    return next => async (action) => {

        next(action);

        console.log(action.type);

        if (action.type === SET_LOCATION_ZIP || action.type === SET_LOCATION_CITY) {
            store.dispatch(refresh());
            return;
        } else if (action.type !== GET_NEW_LOCATION) {
            return;
        }

        let { status } = await Permissions.askAsync(Permissions.LOCATION);
        
        if (status !== 'granted') {
            return;
        }

        let location = await Location.getCurrentPositionAsync({accuracy:Location.Accuracy.Highest});
        store.dispatch(setNewLocation(location.coords));
        store.dispatch(refresh());
        return;
    }
};