import React from "react";
import { StyleSheet, View } from "react-native";
import WeatherIcon from "../WeatherIcon/WeatherIcon";
import SimpliWeatherTextContainer from "../SimpliWeatherText/SimpliWeatherTextContainer";

export default function CurrentWeather(props) {
  return (
    <View style={styles.CurrentWrapper}>
      <View style={styles.iconAndTemp}>
        <WeatherIcon
          icon={props.id}
          isDay={props.isDay}
          style={styles.currentWeatherIcon}
        />
        <SimpliWeatherTextContainer style={styles.CurrentTemp}>
          {props.temp}&deg;
        </SimpliWeatherTextContainer>
      </View>

      <SimpliWeatherTextContainer style={styles.CurrentDetails}>
        {props.condition} | {props.hi}&deg; | {props.lo}&deg;
      </SimpliWeatherTextContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  CurrentWrapper: {
    padding: 20,
  },
  CurrentDetails: {
    fontSize: 18,
    textAlign: "center",
  },
  iconAndTemp: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  currentWeatherIcon: {
    width: 200,
    height: 200,
    marginLeft: "-2%",
  },
  CurrentTemp: {
    fontSize: 84,
    marginRight: "2%",
  },
});
