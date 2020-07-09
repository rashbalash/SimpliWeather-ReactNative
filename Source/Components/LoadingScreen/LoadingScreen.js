import React from 'react';
import { View, StyleSheet } from 'react-native';
import WeatherIcon from '../WeatherIcon/WeatherIcon';

export default function LoadingScreen() {

    return (
        <View>
            <WeatherIcon icon={ clear } isDay={true} />
        </View>
    )
}
    
const styles = StyleSheet.create({
    appWrapper: {
      flex: 1,
    },
});