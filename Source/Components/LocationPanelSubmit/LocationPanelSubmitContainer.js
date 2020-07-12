import { connect } from 'react-redux';
import LocationPanelSubmit from './LocationPanelSubmit';
import { setLocationZip, setLocationCity, getNewLocation } from '../../Redux/Actions/Actions';


const mapStateToProps = (state) => {
    return {
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setLocationZip: (submitText) => dispatch(setLocationZip(submitText)),
        setLocationCity: (submitText) => dispatch(setLocationCity(submitText)),
        getNewLocation: () => dispatch(getNewLocation()),
    }
};
const LocationPanelSubmitContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(LocationPanelSubmit);

export default LocationPanelSubmitContainer;