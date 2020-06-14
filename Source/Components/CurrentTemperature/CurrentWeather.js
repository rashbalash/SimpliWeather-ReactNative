import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LottieView from 'lottie-react-native';

export default function CurrentWeather() {
    return (
        <View style={ styles.CurrentWrapper }>
            
            <View style={ styles.iconAndTemp }>
                <Text style={ styles.CurrentTemp }>69&deg;</Text>
            </View>
            
            <Text style={ styles.CurrentDetails }>Condition | Hi&deg; | Lo&deg;</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    CurrentWrapper: {
        alignItems: "center",
        padding: 20,
        paddingBottom: 90
    },
    CurrentDetails: {
        fontSize: 18,
    },
    iconAndTemp: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        // marginTop: 60
    },  
    currentWeatherIcon: {
        alignSelf: "flex-start",
        width: 100,
        height: 130,
    },
    CurrentTemp: {
        fontSize: 84,
        alignSelf: "flex-end"
    }
})