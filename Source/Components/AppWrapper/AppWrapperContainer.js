import { connect } from 'react-redux';
import AppWrapper from './AppWrapper';
import { withTheme } from 'react-native-paper';

const mapStateToProps = (state) => {
    return {
        locationName: state.reducer.locationName
    };
};

const AppWrapperContainer = connect(
    mapStateToProps
)(withTheme(AppWrapper));

export default AppWrapperContainer;