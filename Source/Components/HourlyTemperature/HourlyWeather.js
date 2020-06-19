import React from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';
import LottieView from 'lottie-react-native';

export default function Hourly(props) {

    var hourlyData = []

    if (!!props.hourlyWeatherData) {
        for (let i =0; i < 12; ++i) {
            hourlyData.push(
                <View key={i} style={ styles.HourWrapper }>
                    {/* Time */}
                    <Text style={ styles.HourlyTime }>{ props.hourlyWeatherData[i].hour }:00 { props.hourlyWeatherData[i].amOrPm }</Text>
                    {/* Icon */}
                    <LottieView source={require('../../weathericons/animated/partly-shower.json')} style={ styles.HourlyIcon } autoPlay loop/>
                    {/* Temperature */}
                    <Text style={ styles.HourlyTemp }>{ props.hourlyWeatherData[i].temperature }&deg;</Text>
                </View>
            )
        }
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