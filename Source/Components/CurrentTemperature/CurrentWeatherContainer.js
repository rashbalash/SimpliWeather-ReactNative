import { connect } from 'react-redux';
import CurrentWeather from './CurrentWeather';

const mapStateToProps = (state) => {
    return {
        currentTemp: state.reducer.currentWeather.temp,
        currentCondition: state.reducer.currentWeather.condition,
        currentHi: state.reducer.currentWeather.hi,
        currentLo: state.reducer.currentWeather.lo,
    };
};

const CurrentWeatherContainer = connect(
    mapStateToProps
)(CurrentWeather);

export default CurrentWeatherContainer;