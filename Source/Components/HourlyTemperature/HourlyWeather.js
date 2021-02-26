import React from "react";
import { StyleSheet, View, Text, Dimensions } from "react-native";
import { ScrollView as GestureHandlerScrollView } from "react-native-gesture-handler";
import SimpliWeatherTextContainer from "../SimpliWeatherText/SimpliWeatherTextContainer";

import WeatherIcon from "../WeatherIcon/WeatherIcon";
const ShowPercentage = (props) => {
  if (props.pop !== 0) {
    return <Text style={{ color: "#1976d2" }}>{props.pop}%</Text>;
  }
  return <Text style={{ color: "#1976d2" }}></Text>;
};
export default function Hourly(props) {
  var hourlyData = [];

  if (!!props.hourlyWeatherData) {
    for (let i = 1; i < 14; ++i) {
      hourlyData.push(
        <View key={i} style={styles.HourWrapper}>
          {/* Time */}
          <SimpliWeatherTextContainer style={styles.HourlyTime}>
            {props.hourlyWeatherData[i].hour}:00{" "}
            {props.hourlyWeatherData[i].amOrPm}
          </SimpliWeatherTextContainer>
          {/* Icon */}
          <WeatherIcon
            icon={props.hourlyWeatherData[i].id}
            isDay={props.hourlyWeatherData[i].isDay}
            style={styles.HourlyIcon}
          />
          {/* Temperature */}
          <SimpliWeatherTextContainer style={styles.HourlyTemp}>
            {props.hourlyWeatherData[i].temperature}&deg;
          </SimpliWeatherTextContainer>
          <ShowPercentage pop={props.hourlyWeatherData[i].pop} />
        </View>
      );
    }
  }
  return (
    <View style={styles.HourlyWrapper}>
      <SimpliWeatherTextContainer style={styles.HourlyHeader}>
        Hourly
      </SimpliWeatherTextContainer>

      {/* Hour */}
      <View>
        <GestureHandlerScrollView horizontal={true}>
          {hourlyData}
        </GestureHandlerScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  HourlyWrapper: {
    paddingBottom: 20,
  },
  HourlyHeader: {
    fontSize: 30,
  },
  HourlyTime: {
    fontSize: 16,
  },
  HourlyTemp: {
    fontSize: 16,
  },
  HourWrapper: {
    paddingTop: 15,
    display: "flex",
    alignItems: "center",
    width: 100,
  },
  HourlyIcon: {
    width: 65,
    height: 65,
  },
});
