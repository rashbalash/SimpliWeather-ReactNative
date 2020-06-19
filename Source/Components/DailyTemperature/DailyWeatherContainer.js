import { connect } from 'react-redux';
import DailyWeather from './DailyWeather';

const mapStateToProps = (state) => {
    return {
        dailyWeatherData: state.reducer.dailyWeatherData,
    };
};

const DailyWeatherContainer = connect(
    mapStateToProps
)(DailyWeather);

export default DailyWeatherContainer;