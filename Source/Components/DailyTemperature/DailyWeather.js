import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { ScrollView as GestureHandlerScrollView } from "react-native-gesture-handler";
import SimpliWeatherTextContainer from "../SimpliWeatherText/SimpliWeatherTextContainer";

import WeatherIcon from "../WeatherIcon/WeatherIcon";

const ShowPercentage = (props) => {
  if (props.pop !== 0) {
    return <Text style={{ color: "#1976d2" }}>{props.pop}%</Text>;
  }
  return <Text style={{ color: "#1976d2" }}></Text>;
};

export default function Daily(props) {
  var dailyData = [];

  if (!!props.dailyWeatherData) {
    for (let i = 0; i < props.dailyWeatherData.length; ++i) {
      dailyData.push(
        <View key={i} style={styles.DayWrapper}>
          {/* Day */}
          <SimpliWeatherTextContainer style={styles.DailyDay}>
            {props.dailyWeatherData[i].day}
          </SimpliWeatherTextContainer>
          {/* Icon */}
          <WeatherIcon
            icon={props.dailyWeatherData[i].id}
            isDay={true}
            style={styles.DailyIcon}
          />
          {/* Temperature */}
          <SimpliWeatherTextContainer style={styles.DailyTemps}>
            {props.dailyWeatherData[i].hi}&deg; | {props.dailyWeatherData[i].lo}
            &deg;
          </SimpliWeatherTextContainer>
          {/* Percentage of Precipitation */}
          <ShowPercentage pop={props.dailyWeatherData[i].pop} />
        </View>
      );
    }
  }

  return (
    <View style={styles.DailyWrapper}>
      <SimpliWeatherTextContainer style={styles.DailyHeader}>
        Daily
      </SimpliWeatherTextContainer>

      <View>
        <GestureHandlerScrollView horizontal>
          {dailyData}
        </GestureHandlerScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  DailyWrapper: {
    paddingBottom: 20,
  },
  DailyHeader: {
    fontSize: 30,
  },
  DailyDay: {
    fontSize: 16,
  },
  DailyTemps: {
    fontSize: 16,
  },
  DayWrapper: {
    paddingTop: 15,
    display: "flex",
    alignItems: "center",
    width: 100,
  },
  DailyIcon: {
    width: 65,
    height: 65,
  },
});
