import {
  GET_NEW_LOCATION,
  setNewLocation,
  refresh,
  setState,
  SET_LOCATION_ZIP,
  SET_LOCATION_CITY,
  SET_STATE,
  START_APP,
  updateCurrentLocation,
} from "../Actions/Actions";
import * as Location from "expo-location";
import * as Permissions from "expo-permissions";
import { initialState } from "../Reducers/Reducer";
import * as Linking from "expo-linking";
import { Alert } from "react-native";
import * as Device from "expo-device";

export default createLocationMiddleware = (store) => {
  return (next) => async (action) => {
    next(action);

    if (action.type === START_APP) {
      store.dispatch(refresh());
      return;
    }

    if (
      action.type === SET_STATE &&
      store.getState().reducer.currentLocationUsed === true
    ) {
      let { status } = await Permissions.askAsync(Permissions.LOCATION);
      if (status !== "granted") {
        return;
      }
      let location = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.Highest,
      });

      if (
        store.getState().reducer.lastCurrentLocation !== undefined &&
        location.coords.latitude.toFixed(3) !==
          store.getState().reducer.lastCurrentLocation.latitude.toFixed(3) &&
        location.coords.longitude.toFixed(3) !==
          store.getState().reducer.lastCurrentLocation.longitude.toFixed(3)
      ) {
        store.dispatch(updateCurrentLocation(location.coords));
        store.dispatch(refresh());
      }

      return;
    }

    if (action.type === SET_LOCATION_ZIP || action.type === SET_LOCATION_CITY) {
      store.dispatch(refresh());
      return;
    } else if (action.type !== GET_NEW_LOCATION) {
      return;
    }

    let { status } = await Permissions.askAsync(Permissions.LOCATION);

    if (status !== "granted") {
      if (store.getState().reducer.allLocations.length === 0) {
        store.dispatch(setState(initialState));
        store.dispatch(refresh());
      }

      if (Device.brand === "Apple") {
        setTimeout(
          () =>
            Alert.alert(
              "Location Access",
              "In order to give SimpliWeather access to your location you will have to allow it in settings",
              [
                {
                  text: "Go To Settings",
                  onPress: () => Linking.openURL("app-settings:"),
                },
                { text: "OK" },
              ],
              { cancelable: false }
            ),
          800
        );
      }
      return;
    }

    let location = await Location.getCurrentPositionAsync({
      accuracy: Location.Accuracy.Highest,
    });
    store.dispatch(setNewLocation(location.coords));
    store.dispatch(refresh());
    return;
  };
};
