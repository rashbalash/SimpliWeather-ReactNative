import { connect } from "react-redux";
import LocationPanelSubmit from "./LocationPanelSubmit";
import {
  setLocationZip,
  setLocationCity,
  getNewLocation,
} from "../../Redux/Actions/Actions";

const mapStateToProps = (state) => {
  return {
    isCurrentLocationUsed: state.reducer.currentLocationUsed,
    countryCode: state.reducer.defaultCountryCode,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setLocationZip: (submitText, countryCode) =>
      dispatch(setLocationZip(submitText, countryCode)),
    setLocationCity: (submitText, countryCode) =>
      dispatch(setLocationCity(submitText, countryCode)),
    getNewLocation: () => dispatch(getNewLocation()),
  };
};
const LocationPanelSubmitContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LocationPanelSubmit);

export default LocationPanelSubmitContainer;
