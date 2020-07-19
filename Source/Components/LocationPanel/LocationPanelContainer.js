import { connect } from 'react-redux';
import LocationPanel from './LocationPanel';

const mapStateToProps = (state) => {
    return {
        allLocations: state.reducer.allLocations,
    };
};

const LocationPanelContainer = connect(
    mapStateToProps
)(LocationPanel);

export default LocationPanelContainer;