import React, { useState } from "react";
import {
  StyleSheet,
  LayoutAnimation,
  TouchableOpacity,
  View,
  UIManager,
} from "react-native";
import SimpliWeatherTextContainer from "../SimpliWeatherText/SimpliWeatherTextContainer";
import SimpliWeatherViewContainer from "../SimpliWeatherView/SimpliWeatherViewContainer";

export default function WeatherAlerts(props) {
  if (props.weatherAlerts === undefined) {
    return <View style={styles.WeatherAlertEmpty}></View>;
  } else if (props.weatherAlerts.length === 0) {
    return <View style={styles.WeatherAlertEmpty}></View>;
  }

  if (Platform.OS === "android") {
    if (UIManager.setLayoutAnimationEnabledExperimental) {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }

  const [expanded, setExpanded] = React.useState(true);

  return (
    <View style={styles.WeatherAlertWrapper}>
      <TouchableOpacity
        style={styles.WeatherAlertButton}
        onPress={() => {
          LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
          setExpanded(!expanded);
        }}
      >
        <SimpliWeatherTextContainer style={{ textAlign: "center" }}>
          {props.weatherAlerts[0].alertEvent} | Read More
        </SimpliWeatherTextContainer>
      </TouchableOpacity>

      <SimpliWeatherViewContainer
        style={{
          height: expanded ? 0 : null,
          overflow: "hidden",
          paddingTop: 20,
          minWidth: 250,
          alignSelf: "center",
          maxWidth: "90%",
        }}
      >
        <SimpliWeatherTextContainer>
          Area: {props.weatherAlerts[0].area}
        </SimpliWeatherTextContainer>
        <SimpliWeatherTextContainer>
          Time: {props.weatherAlerts[0].startTime} -{" "}
          {props.weatherAlerts[0].endTime}
        </SimpliWeatherTextContainer>
        <SimpliWeatherTextContainer>
          Description:
          {props.weatherAlerts[0].description.map((line) => {
            return `\n \u2022 ${line}`;
          })}
        </SimpliWeatherTextContainer>
      </SimpliWeatherViewContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  WeatherAlertButton: {
    backgroundColor: "#ED1C24",
    padding: 10,
    minWidth: 250,
    borderRadius: 50,
    alignSelf: "center",
  },
  WeatherAlertWrapper: {
    paddingBottom: 70,
  },
  WeatherAlertContent: {
    backgroundColor: "#ED1C24",
  },
  WeatherAlertEmpty: {
    paddingBottom: 130,
  },
});
