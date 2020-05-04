import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
    return (
        <View style={ styles.HeaderWrapper }>
            <Text style={ styles.HeaderTitle }>SimpliWeather</Text>
            <Text style={ styles.HeaderCityName }>City Name</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    HeaderWrapper: {
        paddingTop: 10,
        margin: "auto",
        alignItems: "center",
    },
    HeaderTitle: {
        fontSize: 36,
    },
    HeaderCityName: {
        fontSize: 18,
        color: "#1976d2",
    }
});