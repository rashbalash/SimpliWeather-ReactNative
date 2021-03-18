import React from "react";
import { TouchableOpacity, View } from "react-native";
import WeatherIcon from "../WeatherIcon/WeatherIcon";
import SimpliWeatherTextContainer from "../SimpliWeatherText/SimpliWeatherTextContainer";
import { useTheme, IconButton } from "react-native-paper";

export default function LocationRow(props) {
  const { colors } = useTheme();

  return (
    <TouchableOpacity
      style={{
        height: 100,
        padding: 10,
        justifyContent: "space-between",
        backgroundColor: props.isActive ? "red" : colors.background,
        flexDirection: "row",
        alignItems: "center",
      }}
      onLongPress={props.drag}
    >
      <View
        style={{
          justifyContent: "flex-start",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <WeatherIcon
          icon={props.item.locationCondition}
          isDay={props.item.isDay}
          style={{ height: 70, width: 70 }}
        />

        <SimpliWeatherTextContainer style={{ fontSize: 24 }}>
          {" "}
          {props.item.locationTemp}&deg;{"  "}|{"  "}
        </SimpliWeatherTextContainer>
        <SimpliWeatherTextContainer
          style={{
            fontSize: 24,
          }}
        >
          {props.item.locationName}
        </SimpliWeatherTextContainer>
      </View>
      <IconButton style={{ paddingTop: 5 }} icon="reorder-horizontal" />
    </TouchableOpacity>
  );
}
