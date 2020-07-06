import React from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';
import WeatherIcon from '../WeatherIcon/WeatherIcon';

export default function Daily(props) {

    var dailyData = [];

    if (!!props.dailyWeatherData) {
        for (let i =0; i < props.dailyWeatherData.length; ++i) {
            dailyData.push(
            <View key={i} style={ styles.DayWrapper }>
                
                {/* Day */}
                <Text style={ styles.DailyDay }>{ props.dailyWeatherData[i].day }</Text>
                {/* Icon */}
                <WeatherIcon icon={props.dailyWeatherData[i].id } isDay={true} style={ styles.DailyIcon } />
                {/* Temperature */}
                <Text style={ styles.DailyTemps }>{ props.dailyWeatherData[i].hi }&deg; | { props.dailyWeatherData[i].lo }&deg;</Text>
            </View>
            )
        }
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