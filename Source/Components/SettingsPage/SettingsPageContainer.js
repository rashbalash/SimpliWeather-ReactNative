import { connect } from "react-redux";
import Settings from "./SettingsPage";
import {
  changeUnits,
  changeTheme,
  showUnitAction,
  showThemeAction,
} from "../../Redux/Actions/Actions";
import { withTheme } from "react-native-paper";

const mapStateToProps = (state) => {
  return {
    weatherUnit: state.reducer.weatherUnit,
    theme: state.reducer.theme,
    currentPage: state.reducer.currentPage,
    showThemeAction: state.reducer.showThemeAction,
    showUnitAction: state.reducer.showUnitAction,
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
    onShowUnitAction: () => {
      dispatch(showUnitAction());
    },
    onShowThemeAction: () => {
      dispatch(showThemeAction());
    },
  };
};

const SettingsPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(withTheme(Settings));

export default SettingsPageContainer;
