import { connect } from 'react-redux';
import Settings from './Settings';
import { changeUnits } from '../../Redux/Actions/Actions';

const mapStateToProps = (state) => {
    return {
        weatherUnit: state.reducer.weatherUnit
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onUnitChange: () => {
            dispatch(changeUnits());
        }
    }
}

const SettingsContainer = connect(
    mapStateToProps, 
    mapDispatchToProps
)(Settings);

export default SettingsContainer;