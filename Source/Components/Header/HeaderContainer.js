import { connect } from 'react-redux';
import Header from './Header';

const mapStateToProps = (state) => {
    return {
        locationName: state.reducer.locationName,
    };
};

const HeaderContainer = connect(
    mapStateToProps
)(Header);

export default HeaderContainer;