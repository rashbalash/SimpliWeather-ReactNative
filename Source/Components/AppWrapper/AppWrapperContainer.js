import { connect } from 'react-redux';
import AppWrapper from './AppWrapper';
import { withTheme } from 'react-native-paper';
import { refresh } from '../../Redux/Actions/Actions';

const mapStateToProps = (state) => {
    return {
        locationName: state.reducer.locationName,
        refreshing: state.reducer.refreshing
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onRefresh: () => dispatch(refresh())
    }
};


const AppWrapperContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(withTheme(AppWrapper));

export default AppWrapperContainer;