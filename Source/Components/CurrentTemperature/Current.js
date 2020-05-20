import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LottieView from 'lottie-react-native';

export default function Current() {
    return (
        <View style={ styles.CurrentWrapper }>
            
            <View style={ styles.iconAndTemp }>
            <LottieView source={require('../../weathericons/thing.json')} colorFilters={[{ keypath: "button", color: "#F00000" },{ keypath: "Sending Loader", color: "#F00000" }]}style={{ width:200, height: 200 }} autoPlay loop/>
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