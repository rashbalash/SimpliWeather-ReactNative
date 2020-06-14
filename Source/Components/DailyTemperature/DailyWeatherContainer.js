import { connect } from 'react-redux';
import DailyWeather from './DailyWeather';

const mapStateToProps = (state) => {
    return {
        dailyTemp: state.dailyTemp,
        dailyCondition: state.dailyCondition,
        dailyHi: state.dailyHi,
        dailyLo: state.dailyLo
    };
};

const DailyWeatherContainer = connect(
    mapStateToProps
)(DailyWeather);

export default DailyWeatherContainer;