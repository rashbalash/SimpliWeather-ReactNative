import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { FAB, Portal } from "react-native-paper";

import AddNewLocation from "../AddNewLocation/AddNewLocation";
import SettingsPageContainer from "../SettingsPage/SettingsPageContainer";
import AllLocationsContainer from "../AllLocations/AllLocationsContainer";

class Settings extends Component {
  state = {
    open: false,
    settingsModalOpen: false,
    isAddingLocation: false,
    allLocationsModalOpen: false,
  };

  _onStateChange = ({ open }) => this.setState({ open });

  render() {
    const { open } = this.state;

    const unitIcon =
      this.props.weatherUnit === "metric"
        ? "temperature-celsius"
        : "temperature-fahrenheit";

    let additionalActionArray = [];

    if (this.props.showUnitAction === true) {
      additionalActionArray.push({
        icon: unitIcon,
        label: "Fahrenheit or Celsius",
        onPress: () => this.props.onUnitChange(),
      });
    }
    if (this.props.showThemeAction === true) {
      additionalActionArray.push({
        icon: "theme-light-dark",
        label: "Dark or Light Mode",
        onPress: () => this.props.onThemeChange(),
      });
    }
    if (this.props.showAllLocationsAction === true) {
      additionalActionArray.push({
        icon: "format-list-bulleted-square",
        label: "All Locations",
        onPress: () => this.setState({ allLocationsModalOpen: true }),
      });
    }

    return (
      <View>
        <Portal>
          <FAB.Group
            open={open}
            icon={open ? "close" : "dots-vertical"}
            actions={[
              {
                icon: "cog",
                label: "Settings",
                onPress: () => this.setState({ settingsModalOpen: true }),
              },
              {
                icon: "plus",
                label: "Add a Location",
                onPress: () => this.setState({ isAddingLocation: true }),
              },
              {
                icon: "minus",
                label: "Remove Location",
                onPress: () =>
                  this.props.removeLocation(this.props.currentPage),
              },
              ...additionalActionArray,
            ]}
            small
            onStateChange={this._onStateChange}
            onPress={() => {}}
            fabStyle={styles.fab}
          />
        </Portal>

        <AddNewLocation
          isModalOpen={this.state.isAddingLocation}
          closeModal={() => this.setState({ isAddingLocation: false })}
        />
        <SettingsPageContainer
          isModalOpen={this.state.settingsModalOpen}
          closeModal={() => this.setState({ settingsModalOpen: false })}
        />
        <AllLocationsContainer
          isModalOpen={this.state.allLocationsModalOpen}
          closeModal={() => this.setState({ allLocationsModalOpen: false })}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  fab: {
    backgroundColor: "#D64045",
  },
});

export default Settings;
