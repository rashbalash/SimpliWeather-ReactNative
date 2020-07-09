import { connect } from 'react-redux';
import SimpliWeatherText from './SimpliWeatherText';
import { withTheme } from 'react-native-paper';

const mapStateToProps = (state) => {
    return {
        
    };
};

const SimpliWeatherTextContainer = connect(
    mapStateToProps
)(withTheme(SimpliWeatherText));

export default SimpliWeatherTextContainer;