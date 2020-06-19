import { connect } from 'react-redux';
import HourlyWeather from './HourlyWeather';

const mapStateToProps = (state) => {
    return {
        hourlyWeatherData: state.reducer.hourlyWeatherData,
    };
};

const HourlyWeatherContainer = connect(
    mapStateToProps
)(HourlyWeather);

export default HourlyWeatherContainer;