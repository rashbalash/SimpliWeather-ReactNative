import React from 'react';

import { View, Dimensions } from 'react-native';

import Header from '../Header/Header';
import CurrentWeather from '../CurrentTemperature/CurrentWeather';
import DailyWeather from '../DailyTemperature/DailyWeather';
import HourlyWeather from '../HourlyTemperature/HourlyWeather';
import More from '../MoreAboutToday/More';


export default function WeatherPanel(props) {

    return (
        <View style={{ width: Dimensions.get('window').width-20 }}>
            {/* LocationName */}
            <Header locationName={props.location.name} />

            {/* Current */}
            <CurrentWeather {...props.location.currentWeather} />
            
            {/* Hourly */}
            <HourlyWeather hourlyWeatherData={props.location.hourlyWeatherData} />

            {/* Daily */}
            <DailyWeather dailyWeatherData={props.location.dailyWeatherData} />

            {/* More About Today */}
            <More {...props.location.moreAboutToday} />
        </View>
    );
}