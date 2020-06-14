import { ADD_NEW_LOCATION, UPDATE_LOCATION, CHANGE_UNITS, CHANGE_MODE } from '../Actions/Actions';

function reducer( state={}, action) {

    switch(action.type) {
        case ADD_NEW_LOCATION:
            return state;
    
        case UPDATE_LOCATION:
            return state;

        case CHANGE_UNITS:
            return {
                ...state,
                weatherUnit: state.weatherUnit === 'F' ? 'C' : 'F',
            };

        case CHANGE_MODE:
            return state;
        
        default:
            return state;
    }

}

export default reducer;