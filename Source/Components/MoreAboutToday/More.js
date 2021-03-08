import React from "react";
import { StyleSheet, View } from "react-native";
import SimpliWeatherTextContainer from "../SimpliWeatherText/SimpliWeatherTextContainer";

export default function More(props) {
  return (
    <View>
      <SimpliWeatherTextContainer style={styles.MoreHeader}>
        More About Today
      </SimpliWeatherTextContainer>

      <View style={styles.MoreDetails}>
        <View>
          <SimpliWeatherTextContainer style={styles.itemName}>
            Precipitation
          </SimpliWeatherTextContainer>
          <SimpliWeatherTextContainer style={styles.itemValue}>
            {props.precipitation} {props.precipitationUnit}
          </SimpliWeatherTextContainer>

          <SimpliWeatherTextContainer style={styles.itemName}>
            Sunrise
          </SimpliWeatherTextContainer>
          <SimpliWeatherTextContainer style={styles.itemValue}>
            {props.sunrise} {props.sunriseTime}
          </SimpliWeatherTextContainer>

          <SimpliWeatherTextContainer style={styles.itemName}>
            Wind
          </SimpliWeatherTextContainer>
          <SimpliWeatherTextContainer style={styles.itemValue}>
            {props.wind} {props.windSpeedUnit} {props.windDirection}
          </SimpliWeatherTextContainer>
        </View>

        <View>
          <SimpliWeatherTextContainer style={styles.itemName}>
            Humidity
          </SimpliWeatherTextContainer>
          <SimpliWeatherTextContainer style={styles.itemValue}>
            {props.humidity}%
          </SimpliWeatherTextContainer>

          <SimpliWeatherTextContainer style={styles.itemName}>
            Sunset
          </SimpliWeatherTextContainer>
          <SimpliWeatherTextContainer style={styles.itemValue}>
            {props.sunset} {props.sunsetTime}
          </SimpliWeatherTextContainer>

          <SimpliWeatherTextContainer style={styles.itemName}>
            Pressure
          </SimpliWeatherTextContainer>
          <SimpliWeatherTextContainer style={styles.itemValue}>
            {props.pressure} Pascals
          </SimpliWeatherTextContainer>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  MoreHeader: {
    fontSize: 30,
  },
  MoreDetails: {
    paddingTop: 0,
    padding: 15,
    paddingBottom: 60,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  itemName: {
    fontSize: 20,
    textDecorationLine: "underline",
    padding: 15,
  },
  itemValue: {
    paddingLeft: 15,
    fontSize: 18,
  },
});
