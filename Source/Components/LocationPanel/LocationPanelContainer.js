import { connect } from 'react-redux';
import LocationPanel from './LocationPanel';

const mapStateToProps = (state) => {
    return {
        locationName: state.reducer.locationName,
    };
};

const LocationPanelContainer = connect(
    mapStateToProps
)(LocationPanel);

export default LocationPanelContainer;