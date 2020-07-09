import { connect } from 'react-redux';
import SimpliWeatherView from './SimpliWeatherView';
import { withTheme } from 'react-native-paper';

const mapStateToProps = (state) => {
    return {
        
    };
};

const SimpliWeatherViewContainer = connect(
    mapStateToProps
)(withTheme(SimpliWeatherView));

export default SimpliWeatherViewContainer;