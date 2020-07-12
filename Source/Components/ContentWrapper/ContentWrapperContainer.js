import { connect } from 'react-redux';
import ContentWrapper from './ContentWrapper';

const mapStateToProps = (state) => {

    return {
        theme: state.reducer.theme,
    };
};


const ContentWrapperContainer = connect(
    mapStateToProps,
)(ContentWrapper);

export default ContentWrapperContainer;