import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Image from 'react-native-remote-svg';

export default function Current() {
    return (
        <View style={ styles.CurrentWrapper }>

            <View style={ styles.iconAndTemp }>
                <Image source={require('../../weathericons/animated/day.svg')} style={ styles.currentWeatherIcon }/>
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
        marginTop: 60
    },  
    currentWeatherIcon: {
        width: 300,
        height: 300,
        margin: -70,
    },
    CurrentTemp: {
        fontSize: 84,
        marginLeft: -70,
        margin: -50,
    }
})