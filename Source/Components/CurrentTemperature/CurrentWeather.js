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
        <View style={styles.tempsContainer}>
          <SimpliWeatherTextContainer style={styles.CurrentTemp}>
            {props.temp}&deg;
          </SimpliWeatherTextContainer>
        </View>
      </View>

      <SimpliWeatherTextContainer style={styles.CurrentDetails}>
        {props.condition} | {props.hi}&deg; | {props.lo}&deg;
      </SimpliWeatherTextContainer>
      <SimpliWeatherTextContainer style={styles.feelsLikeTemp}>
        Feels Like {props.feelsLikeTemp}&deg;
      </SimpliWeatherTextContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  CurrentWrapper: {
    padding: 20,
    paddingTop: 60,
    paddingBottom: 10,
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
    width: 210,
    height: 210,
    marginLeft: "-4%",
  },
  CurrentTemp: {
    fontSize: 96,
    marginRight: "3%",
    opacity: 0.9,
  },
  feelsLikeTemp: {
    opacity: 0.5,
    fontSize: 16,
    textAlign: "center",
    paddingTop: 5,
  },
});
