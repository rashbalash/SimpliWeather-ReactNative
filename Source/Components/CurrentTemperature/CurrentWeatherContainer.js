import { connect } from 'react-redux';
import CurrentWeather from './CurrentWeather';

const mapStateToProps = (state) => {
    return {
        currentTemp: state.currentTemp,
        currentCondition: state.currentCondition,
        currentHi: state.currentHi,
        currentLo: state.currentLo
    };
};

const CurrentWeatherContainer = connect(
    mapStateToProps
)(CurrentWeather);

export default CurrentWeatherContainer;