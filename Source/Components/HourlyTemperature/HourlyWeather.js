import React from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';
import LottieView from 'lottie-react-native';

export default function Hourly() {

    var hourlyData = []

    for (let i =0; i < 10; ++i) {
        hourlyData.push(
            <View key={i} style={ styles.HourWrapper }>
                <Text style={ styles.HourlyTime }>12:00 PM</Text>

                {/* Icon */}
                
                <LottieView source={require('../../weathericons/animated/partly-shower.json')} style={ styles.HourlyIcon } autoPlay loop/>
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
        paddingBottom: 10,
    },
    HourlyHeader: {
        fontSize: 30,
    },
    HourlyTime: {
        fontSize: 16,
    },
    HourlyTemp: {
        fontSize: 16,
    },
    HourWrapper: {
        paddingTop: 15,
        display: "flex",
        alignItems: "center",
        width: 100,
    },
    HourlyIcon: {
        width: 65,
        height: 65,
    }
})