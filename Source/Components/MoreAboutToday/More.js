import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function More(props) {
    return (
        <View>
            <Text style={ styles.MoreHeader }>More About Today</Text>

            <View style={ styles.MoreDetails }>
                
                <View>
                    <Text style={ styles.itemName }>
                        Precipitation
                    </Text>
                    <Text style={ styles.itemValue }>
                        { props.precipitation } { props.precipitationUnit }
                    </Text>

                    <Text style={ styles.itemName }>
                        Sunrise
                    </Text>
                    <Text style={ styles.itemValue }>
                        { props.sunrise } AM
                    </Text>
                    
                    <Text style={ styles.itemName }>
                        Wind
                    </Text>
                    <Text style={ styles.itemValue }>
                        { props.wind } { props.windSpeedUnit } { props.windDirection } 
                    </Text>
                </View>

                <View>

                    <Text style={ styles.itemName }>
                        Humidity
                    </Text>
                    <Text style={ styles.itemValue }>
                        { props.humidity }% 
                    </Text>

                    <Text style={ styles.itemName }>
                        Sunset
                    </Text>
                    <Text style={ styles.itemValue }>
                        { props.sunset } PM
                    </Text>

                    <Text style={ styles.itemName }>
                        Pressure
                    </Text>
                    <Text style={ styles.itemValue }>
                        { props.pressure } hPa
                    </Text>
                </View>                
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    MoreHeader: {
        fontSize: 30,
    },
    MoreDetails: {
        paddingTop: 0,
        padding: 15,
        paddingBottom: 60,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    itemName: {
        fontSize: 20,
        textDecorationLine: "underline",
        padding: 15,
    },
    itemValue: {
        paddingLeft: 15,
        fontSize: 18,
    }
})