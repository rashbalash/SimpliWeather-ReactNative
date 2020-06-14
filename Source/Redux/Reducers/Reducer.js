import { ADD_NEW_LOCATION, UPDATE_LOCATION, CHANGE_UNITS, CHANGE_THEME } from '../Actions/Actions';
import {weatherUnit, theme} from '../../Constants';


function reducer( state={}, action) {

    switch(action.type) {
        case ADD_NEW_LOCATION:
            return state;
    
        case UPDATE_LOCATION:
            return state;

        case CHANGE_UNITS:
            return {
                ...state,
                weatherUnit: state.weatherUnit === weatherUnit.IMPERIAL ? weatherUnit.METRIC : weatherUnit.IMPERIAL,
            };

        case CHANGE_THEME:
            return {
                ...state,
                theme: state.theme === theme.LIGHT ? theme.DARK : theme.LIGHT,  
            };
        
        default:
            return state;
    }
}

export const initialState = {
    weatherUnit: weatherUnit.IMPERIAL,
    theme: theme.LIGHT,
    location: { zipcode: `20852` },
}

export default reducer; 