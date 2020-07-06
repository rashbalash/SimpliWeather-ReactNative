import React from 'react';

import { View } from 'react-native';

import CurrentWeatherContainer from '../CurrentTemperature/CurrentWeatherContainer';
import DailyWeatherContainer from '../DailyTemperature/DailyWeatherContainer';
import HourlyWeatherContainer from '../HourlyTemperature/HourlyWeatherContainer';
import MoreContainer from '../MoreAboutToday/MoreContainer';


export default function WeatherPanel() {

    return (
        <View>
            {/* Current */}
            <CurrentWeatherContainer />

            {/* Hourly */}
            <HourlyWeatherContainer />

            {/* Daily */}
            <DailyWeatherContainer />

            {/* More About Today */}
            <MoreContainer />
        </View>
    );
}