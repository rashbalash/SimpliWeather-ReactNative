import React from "react";
import LottieView from "lottie-react-native";
import { Text } from "react-native";

const cloudyThunder = require("../../weathericons/animated/thunder.json");
const cloudyNightRain = require("../../weathericons/animated/cloudyNightRain.json");
const cloudyNightSnowing = require("../../weathericons/animated/cloudyNightSnowing.json");
const cloudySunnyRain = require("../../weathericons/animated/partlyCloudyRain.json");
const cloudySunnyThunderRain = require("../../weathericons/animated/thunder.json");
const cloudy = require("../../weathericons/animated/cloudy.json");
const cloudyThunderRain = require("../../weathericons/animated/thunder.json");
const day = require("../../weathericons/animated/day.json");
const foggy = require("../../weathericons/animated/foggy.json");
const misty = require("../../weathericons/animated/misty.json");
const night = require("../../weathericons/animated/night.json");
const partlyCloudy = require("../../weathericons/animated/cloudyDay.json");
const partlyCloudyNight = require("../../weathericons/animated/cloudyNight.json");
const partlyShower = require("../../weathericons/animated/partlyCloudyRain.json");
const snowing = require("../../weathericons/animated/snowing.json");
const sunnyCloudySnowing = require("../../weathericons/animated/sunnyCloudySnowing.json");

export default function WeatherIcon(props) {
  const icon = matchIcon(props.icon, props.isDay);
  if (icon === undefined) {
    return <Text>Loading...</Text>;
  }
  return <LottieView source={icon} style={props.style} autoPlay loop />;
}

function matchIcon(icon, isDay) {
  if (isDay === false) {
    switch (icon) {
      case "clear":
        return night;
      case "clouds":
        return partlyCloudyNight;
      case "lightRain":
        return cloudyNightRain;
      case "thunderstorm":
        return cloudyThunder;
      case "drizzle":
        return cloudyNightRain;
      case "heavyRain":
        return cloudyNightRain;
      case "freezingRain":
        return cloudyNightRain;
      case "lightSnow":
        return cloudyNightSnowing;
      case "heavySnow":
        return cloudyNightSnowing;
      case "atmosphere":
        return foggy;
    }
  } else {
    switch (icon) {
      case "clear":
        return day;
      case "clouds":
        return partlyCloudy;
      case "lightRain":
        return partlyShower;
      case "thunderstorm":
        return cloudySunnyThunderRain;
      case "drizzle":
        return cloudyThunderRain;
      case "heavyRain":
        return cloudySunnyRain;
      case "freezingRain":
        return cloudyThunderRain;
      case "lightSnow":
        return sunnyCloudySnowing;
      case "heavySnow":
        return snowing;
      case "atmosphere":
        return misty;
    }
  }
}
