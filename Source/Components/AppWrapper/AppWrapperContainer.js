import { connect } from 'react-redux';
import AppWrapper from './AppWrapper';
import { withTheme } from 'react-native-paper';
import { refresh, setCurrentPage } from '../../Redux/Actions/Actions';
import { Dimensions } from 'react-native';

const mapStateToProps = (state) => {
    return {
        locationName: state.reducer.locationName,
        refreshing: state.reducer.refreshing,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onRefresh: () => dispatch(refresh()),
        setCurrentPage: (event) => {
            const page = Math.round(parseFloat(event.nativeEvent.contentOffset.x/Dimensions.get('window').width));
            dispatch(setCurrentPage(page));
        }
    }
};


const AppWrapperContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(withTheme(AppWrapper));

export default AppWrapperContainer;