import React from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';
import LottieView from 'lottie-react-native';

export default function Hourly() {

    var hourlyData = []

    for (let i =0; i < 5; ++i) {
        hourlyData.push(
            <View key={i} style={ styles.HourWrapper }>
                <Text style={ styles.HourlyTime }>12:00 PM</Text>

                {/* Icon */}
                <LottieView source={require('../../weathericons/animated/day.json')} style={ styles.HourlyIcon } autoPlay loop/>
                {/* Temperature */}
                <Text style={ styles.HourlyTemp }>69&deg;</Text>            
            </View>
        )
    }

    return (
        <View style={ styles.HourlyWrapper }>
            <Text style={ styles.HourlyHeader }>Hourly</Text>

            {/* Hour */}
            <View>
                <ScrollView horizontal>
                    { hourlyData }
                </ScrollView>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    HourlyWrapper: {
        paddingBottom: 10
    },
    HourlyHeader: {
        fontSize: 30,
    },
    HourlyTime: {
        fontSize: 16,
        marginBottom: -20,
    },
    HourlyTemp: {
        fontSize: 16,
        marginTop: -20,
    },
    HourWrapper: {
        paddingTop: 15,
        display: "flex",
        alignItems: "center",
    },
    HourlyIcon: {
        width: 50,
        height: 50,
        marginTop: 10,
        marginRight: 20,
        paddingBottom: 30,
    }
})