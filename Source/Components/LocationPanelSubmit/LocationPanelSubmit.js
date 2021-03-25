import {
  Animated,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Alert,
  Platform,
} from "react-native";
import React, { useRef, useState } from "react";

import * as Permissions from "expo-permissions";
import SimpliWeatherTextContainer from "../SimpliWeatherText/SimpliWeatherTextContainer";
import TextInputSearch from "../TextInputSearch/TextInputSearch";
import CountrySelect from "../CountrySelect/CountrySelect";
import { ProgressBar } from "react-native-paper";
export default function LocationPanelSubmit(props) {
  const [textInputVisible, setTextInputVisible] = props.isCurrentLocationUsed
    ? useState(true)
    : useState(false);
  const [componentsInvisible, setComponentsInvisible] = useState(false);
  const [submitText, setText] = useState("");
  const [displayWarning, setDisplayWarning] = useState(false);
  const [currentCountryCode, setcurrentCountryCode] = useState(
    props.countryCode
  );

  const getCurrentLocation = (props) => {
    props.getNewLocation();
    if (!!props.closeModal) {
      props.closeModal();
    }
    setComponentsInvisible(!componentsInvisible);
  };

  const FadeInViewTwo = (props) => {
    const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

    React.useEffect(() => {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }).start();
    }, []);

    return (
      <Animated.View // Special animatable View
        style={{
          ...props.style,
          opacity: fadeAnim, // Bind opacity to animated value
        }}
      >
        {props.children}
      </Animated.View>
    );
  };
  const isZipCode = (submitText) => {
    return !isNaN(parseInt(submitText));
  };

  if (componentsInvisible === true) {
    return (
      <View>
        <FadeInViewTwo style={styles.emptySpace}>
          <ProgressBar
            indeterminate
            animating
            color="#ED1C24"
            style={{ width: 270, borderRadius: 50 }}
          />
        </FadeInViewTwo>
      </View>
    );
  } else if (textInputVisible === true && componentsInvisible === false) {
    return (
      <View style={{ width: "100%" }}>
        <SimpliWeatherTextContainer
          style={
            displayWarning ? styles.locationWarning : { height: 0, opacity: 0 }
          }
        >
          Please Use A Valid Location
        </SimpliWeatherTextContainer>

        <View style={styles.inputSection}>
          <CountrySelect
            countryCode={currentCountryCode}
            setCountryCode={setcurrentCountryCode}
          />
          <View style={{ paddingLeft: 5, flexGrow: 1 }}>
            <TextInputSearch submitText={submitText} setText={setText} />
          </View>
        </View>
        <View style={styles.currentLocationView}>
          <TouchableOpacity
            style={styles.continueButton}
            onPress={() => {
              if (isZipCode(submitText) && submitText.trim()) {
                if (submitText.length !== 5) {
                  setDisplayWarning(
                    displayWarning ? displayWarning : !displayWarning
                  );
                  return;
                }
                props.setLocationZip(
                  parseInt(submitText.trim()),
                  currentCountryCode
                );
                if (!!props.closeModal) {
                  props.closeModal();
                }
              } else {
                if (submitText.trim()) {
                  props.setLocationCity(submitText.trim(), currentCountryCode);
                  if (!!props.closeModal) {
                    props.closeModal();
                  }
                }
              }

              if (!submitText.trim()) {
                setDisplayWarning(
                  displayWarning ? displayWarning : !displayWarning
                );
                return;
              }

              setComponentsInvisible(!componentsInvisible);
            }}
          >
            <Text style={styles.continueText}>Continue</Text>
          </TouchableOpacity>
        </View>

        <FadeInViewTwo>
          <TouchableOpacity
            onPress={() => setTextInputVisible(!textInputVisible)}
            style={styles.cityOrZipcodeContainer}
          >
            <Text style={{ color: "#ED1C24", fontSize: 16 }}>
              Use your Current Location
            </Text>
          </TouchableOpacity>
        </FadeInViewTwo>
      </View>
    );
  } else {
    return (
      <View>
        <View style={styles.currentLocationView}>
          <SimpliWeatherTextContainer style={styles.panelContext}>
            Allow SimpliWeather to use your location
          </SimpliWeatherTextContainer>

          <TouchableOpacity
            style={
              props.isCurrentLocationUsed
                ? styles.disabledContinueButton
                : styles.continueButton
            }
            disabled={props.isCurrentLocationUsed}
            onPress={() => {
              Permissions.getAsync(Permissions.LOCATION).then(({ status }) => {
                console.log(status);
                if (status === "granted" || Platform.OS !== "android") {
                  getCurrentLocation(props);
                } else {
                  Alert.alert(
                    "Location Permission",
                    "With your permission, Simpliweather uses location data to enable current location weather data",
                    [
                      {
                        text: "Cancel",
                        style: "cancel",
                      },
                      {
                        text: "Continue",
                        onPress: () => getCurrentLocation(props),
                      },
                    ]
                  );
                }
              });
            }}
          >
            <Text style={styles.continueText}>Continue</Text>
          </TouchableOpacity>
        </View>

        <FadeInViewTwo>
          <TouchableOpacity
            onPress={() => setTextInputVisible(!textInputVisible)}
            style={styles.cityOrZipcodeContainer}
          >
            <Text style={{ color: "#ED1C24", fontSize: 16 }}>
              Use City Name or ZipCode
            </Text>
          </TouchableOpacity>
        </FadeInViewTwo>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  panelContext: {
    fontSize: 24,
    textAlign: "center",
    alignItems: "center",
    width: 300,
  },
  locationWarning: {
    fontSize: 18,
    textAlign: "center",
    alignItems: "center",
    paddingBottom: 15,
  },
  currentLocationView: {
    alignItems: "center",
  },
  continueButton: {
    marginTop: 10,
    paddingTop: 15,
    paddingBottom: 15,
    backgroundColor: "#ED1C24",
    borderRadius: 15,
    paddingLeft: 110,
    paddingRight: 110,
    width: "100%",
  },
  disabledContinueButton: {
    marginTop: 10,
    paddingTop: 15,
    paddingBottom: 15,
    backgroundColor: "#cc8585",
    borderRadius: 15,
    paddingLeft: 110,
    paddingRight: 110,
    width: "100%",
    opacity: 0.5,
  },
  continueText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 22,
  },
  cityOrZipcodeContainer: {
    marginTop: 10,
    alignItems: "center",
  },
  emptySpace: {
    marginTop: 150,
  },
  inputSection: {
    display: "flex",
    flexDirection: "row",
    flexGrow: 1,
  },
});
