import React from "react";
import { StyleSheet, View, Text, Dimensions, FlatList } from "react-native";
import { FlatList as GestureHandlerFlatList } from "react-native-gesture-handler";
import SimpliWeatherTextContainer from "../SimpliWeatherText/SimpliWeatherTextContainer";

import WeatherIcon from "../WeatherIcon/WeatherIcon";
const ShowPercentage = (props) => {
  if (props.pop >= 20) {
    return <Text style={{ color: "#1976d2" }}>{props.pop}%</Text>;
  }
  return <Text style={{ color: "#1976d2" }}></Text>;
};

// const DATA = [
//   {
//     id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
//     title: "First Item",
//   },
//   {
//     id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
//     title: "Second Item",
//   },
//   {
//     id: "58694a0f-3da1-471f-bd96-145571e29d72",
//     title: "Third Item",
//   },
// ];

const Item = ({ id, hour, amOrPm, icon, isDay, pop, temperature }) => (
  <View key={id} style={styles.HourWrapper}>
    {/* Time */}
    <SimpliWeatherTextContainer style={styles.HourlyTime}>
      {hour}:00 {amOrPm}
    </SimpliWeatherTextContainer>
    {/* Icon */}
    <WeatherIcon icon={icon} isDay={isDay} style={styles.HourlyIcon} />
    {/* Percentage of Precipitation */}
    <ShowPercentage pop={pop} />
    {/* Temperature */}
    <SimpliWeatherTextContainer style={styles.HourlyTemp}>
      {temperature}&deg;
    </SimpliWeatherTextContainer>
  </View>
);
export default function Hourly(props) {
  let hourlyData = [];

  if (!!props.hourlyWeatherData) {
    for (let i = 1; i < 26; i++) {
      hourlyData.push({
        id: i,
        hour: props.hourlyWeatherData[i].hour,
        amOrPm: props.hourlyWeatherData[i].amOrPm,
        icon: props.hourlyWeatherData[i].id,
        isDay: props.hourlyWeatherData[i].isDay,
        pop: props.hourlyWeatherData[i].pop,
        temperature: props.hourlyWeatherData[i].temperature,
      });
    }
  }

  const renderItem = ({ item }) => (
    <Item
      id={item.id}
      hour={item.hour}
      amOrPm={item.amOrPm}
      icon={item.icon}
      isDay={item.isDay}
      pop={item.pop}
      temperature={item.temperature}
    />
  );

  // if (!!props.hourlyWeatherData) {
  //   for (let i = 1; i < 26; ++i) {
  //     hourlyData.push(
  //       <View key={i} style={styles.HourWrapper}>
  //         {/* Time */}
  //         <SimpliWeatherTextContainer style={styles.HourlyTime}>
  //           {props.hourlyWeatherData[i].hour}:00{" "}
  //           {props.hourlyWeatherData[i].amOrPm}
  //         </SimpliWeatherTextContainer>
  //         {/* Icon */}
  //         <WeatherIcon
  //           icon={props.hourlyWeatherData[i].id}
  //           isDay={props.hourlyWeatherData[i].isDay}
  //           style={styles.HourlyIcon}
  //         />
  //         {/* Percentage of Precipitation */}
  //         <ShowPercentage pop={props.hourlyWeatherData[i].pop} />
  //         {/* Temperature */}
  //         <SimpliWeatherTextContainer style={styles.HourlyTemp}>
  //           {props.hourlyWeatherData[i].temperature}&deg;
  //         </SimpliWeatherTextContainer>
  //       </View>
  //     );
  //   }
  // }
  return (
    <View style={styles.HourlyWrapper}>
      <SimpliWeatherTextContainer style={styles.HourlyHeader}>
        Hourly
      </SimpliWeatherTextContainer>

      {/* Hour */}
      <View>
        {/* <GestureHandlerScrollView horizontal={true}>
          {hourlyData}
        </GestureHandlerScrollView> */}
        <GestureHandlerFlatList
          data={hourlyData}
          renderItem={renderItem}
          keyExtractor={(item) => String(item.id)}
          horizontal={true}
          initialNumToRender={5}
          removeClippedSubviews={false}
          onEndReached={null}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  HourlyWrapper: {
    paddingBottom: 50,
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
    marginBottom: -5,
  },
});
