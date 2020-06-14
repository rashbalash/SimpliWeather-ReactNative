import React from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';
import LottieView from 'lottie-react-native';

export default function Daily() {

    var dailyData = [];

    for (let i =0; i < 5; ++i) {
        dailyData.push(
        <View key={i} style={ styles.DayWrapper }>
            <Text style={ styles.DailyDay }>Day</Text>

            {/* Icon */}
            <LottieView source={require('../../weathericons/animated/day.json')} style={ styles.DailyIcon } autoPlay loop/>

            {/* Temperature */}
            <Text style={ styles.DailyTemps }>Hi&deg; | Lo&deg;</Text>
        </View>
        )
    }

    return (
        <View style={ styles.DailyWrapper }>
            <Text style={ styles.DailyHeader }>Daily</Text>

            <View>
                <ScrollView horizontal>
                    { dailyData }
                </ScrollView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    DailyWrapper: {
        paddingBottom: 10
    },  
    DailyHeader: {
        fontSize: 30,
    },
    DailyDay: {
        fontSize: 16,
    },
    DailyTemps: {
        fontSize: 16,
    },
    DayWrapper: {
        paddingTop: 15,
        display: "flex",
        alignItems: "center",
        width: 100,
    },
    DailyIcon: {
        width: 65,
        height: 65,
    }
})