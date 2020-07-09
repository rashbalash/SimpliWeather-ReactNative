import { connect } from 'react-redux';
import More from './More';
import { withTheme } from 'react-native-paper';

const mapStateToProps = (state) => {
    return {
        precipitation: state.reducer.moreAboutToday.precipitation,
        precipitationUnit: state.reducer.moreAboutToday.precipitationUnit,
        humidity: state.reducer.moreAboutToday.humidity,
        sunrise: state.reducer.moreAboutToday.sunrise,
        sunset: state.reducer.moreAboutToday.sunset,
        wind: state.reducer.moreAboutToday.wind,
        windSpeedUnit: state.reducer.moreAboutToday.windSpeedUnit,
        windDirection: state.reducer.moreAboutToday.windDirection,
        pressure: state.reducer.moreAboutToday.pressure,
    };
};

const MoreContainer = connect(
    mapStateToProps
)(withTheme(More));

export default MoreContainer;