import { connect } from "react-redux";
import AllLocations from "./AllLocations";
import {
  removeLocation,
  updateLocationOrder,
  refresh,
} from "../../Redux/Actions/Actions";
import { withTheme } from "react-native-paper";

const mapStateToProps = (state) => {
  const locationsList = state.reducer.allLocations.map((location) => {
    if (location.hasOwnProperty("currentWeather")) {
      return {
        locationName: location.name,
        locationTemp: location.currentWeather.temp,
        locationCondition: location.currentWeather.id,
        isDay: location.currentWeather.isDay,
      };
    }
  });

  return {
    locationsList: locationsList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    refreshOnClose: () => {
      dispatch(refresh());
    },
    removeLocation: (page) => {
      dispatch(removeLocation(page));
    },
    updateLocation: (data) => {
      dispatch(updateLocationOrder(data));
    },
  };
};

const AllLocationsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(withTheme(AllLocations));

export default AllLocationsContainer;
