import { connect } from 'react-redux';
import ContentWrapper from './ContentWrapper';
import { refresh } from '../../Redux/Actions/Actions';

const mapStateToProps = (state) => {

    return {
        theme: state.reducer.theme,
        refreshing: state.reducer.refreshing
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onRefresh: () => dispatch(refresh())
    }
};

const ContentWrapperContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ContentWrapper);

export default ContentWrapperContainer;