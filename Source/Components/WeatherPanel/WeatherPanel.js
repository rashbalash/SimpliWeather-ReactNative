import React from 'react';

import { View, Dimensions } from 'react-native';

import HeaderContainer from '../Header/HeaderContainer';
import CurrentWeatherContainer from '../CurrentTemperature/CurrentWeatherContainer';
import DailyWeatherContainer from '../DailyTemperature/DailyWeatherContainer';
import HourlyWeatherContainer from '../HourlyTemperature/HourlyWeatherContainer';
import MoreContainer from '../MoreAboutToday/MoreContainer';


export default function WeatherPanel() {

    return (
        <View style={{ width: Dimensions.get('window').width-20 }}>

                {/* LocationName */}
                <HeaderContainer />

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