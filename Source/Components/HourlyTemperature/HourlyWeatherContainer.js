import { connect } from 'react-redux';
import HourlyWeather from './HourlyWeather';

const mapStateToProps = (state) => {
    return {
        hourlyTemp: state.hourlyTemp,
        hourlyCondition: state.hourlyCondition,
        hourlyHi: state.hourlyHi,
        hourlyLo: state.hourlyLo
    };
};

const HourlyWeatherContainer = connect(
    mapStateToProps
)(HourlyWeather);

export default HourlyWeatherContainer;