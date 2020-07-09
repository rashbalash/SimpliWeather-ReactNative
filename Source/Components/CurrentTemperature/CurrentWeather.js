import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import WeatherIcon from '../WeatherIcon/WeatherIcon';
import SimpliWeatherTextContainer from '../SimpliWeatherText/SimpliWeatherTextContainer';

export default function CurrentWeather(props) {
    return (
        <View style={ styles.CurrentWrapper }>
            
            <View style={ styles.iconAndTemp }>
                <WeatherIcon icon={props.id} isDay={props.isDay} style={styles.currentWeatherIcon} />
                <SimpliWeatherTextContainer style={ styles.CurrentTemp }>{ props.currentTemp }&deg;</SimpliWeatherTextContainer>
            </View>
            
            <SimpliWeatherTextContainer style={ styles.CurrentDetails }>{ props.currentCondition } | { props.currentHi }&deg; | { props.currentLo }&deg;</SimpliWeatherTextContainer>
        </View>
    )
}

const styles = StyleSheet.create({
    CurrentWrapper: {
        // marginTop: 60,
        padding: 20,
        paddingBottom: 90,
    },
    CurrentDetails: {
        fontSize: 18,
        marginTop: 20,
        textAlign: "center",
    },
    iconAndTemp: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
    },  
    currentWeatherIcon: {
        width: 150,
        height: 150,
    },
    CurrentTemp: {
        fontSize: 84,
    }
})