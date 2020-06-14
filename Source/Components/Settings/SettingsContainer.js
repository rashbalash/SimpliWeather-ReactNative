import { connect } from 'react-redux';
import Settings from './Settings';
import { changeUnits, changeTheme } from '../../Redux/Actions/Actions';

const mapStateToProps = (state) => {
    return {
        weatherUnit: state.reducer.weatherUnit,
        theme: state.reducer.theme,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onUnitChange: () => {
            dispatch(changeUnits());
        },
        onThemeChange: () => {
            dispatch(changeTheme());
        },
    }
}

const SettingsContainer = connect(
    mapStateToProps, 
    mapDispatchToProps
)(Settings);

export default SettingsContainer;