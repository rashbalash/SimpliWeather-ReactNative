import { connect } from 'react-redux';
import More from './More';

const mapStateToProps = (state) => {
    return {
        morePrecipitation: state.morePrecipitation,
        moreHumidity: state.moreHumidity,
        moreSunrise: state.moreSunrise,
        moreSunset: state.moreSunset,
        moreWind: state.moreSunset,
        morePressure: state.morePressure
    };
};

const MoreContainer = connect(
    mapStateToProps
)(More);

export default MoreContainer;