import React from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';

export default function Daily() {

    var dailyData = [];

    for (let i =0; i < 1; ++i) {
        dailyData.push(
        <View style={ styles.DayWrapper }>
            <Text style={ styles.DailyDay }>Day</Text>


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
        fontSize: 18,
        marginBottom: -20,
    },
    DailyTemps: {
        fontSize: 18,
        marginTop: -20,
    },
    DayWrapper: {
        paddingTop: 15,
        display: "flex",
        alignItems: "center",
    }
})