import { connect } from "react-redux";
import Settings from "./Settings";
import {
  changeUnits,
  changeTheme,
  removeLocation,
} from "../../Redux/Actions/Actions";
import { withTheme } from "react-native-paper";

const mapStateToProps = (state) => {
  return {
    weatherUnit: state.reducer.weatherUnit,
    theme: state.reducer.theme,
    currentPage: state.reducer.currentPage,
    showThemeAction: state.reducer.showThemeAction,
    showUnitAction: state.reducer.showUnitAction,
    showAllLocationsAction: state.reducer.showAllLocationsAction,
    buttonPlacement: state.reducer.buttonPlacement,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onUnitChange: () => {
      dispatch(changeUnits());
    },
    onThemeChange: () => {
      dispatch(changeTheme());
    },
    removeLocation: (page) => {
      dispatch(removeLocation(page));
    },
  };
};

const SettingsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(withTheme(Settings));

export default SettingsContainer;
