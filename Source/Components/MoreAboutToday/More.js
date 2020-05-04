import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function More() {
    return (
        <View>
            <Text style={ styles.MoreHeader }>More About Today</Text>

            <View style={ styles.MoreDetails }>
                
                <View>
                    <Text style={ styles.itemName }>
                        Precipitation
                    </Text>
                    <Text style={ styles.itemValue }>
                        Inches | CM
                    </Text>

                    <Text style={ styles.itemName }>
                        Sunrise
                    </Text>
                    <Text style={ styles.itemValue }>
                        AM
                    </Text>
                    
                    <Text style={ styles.itemName }>
                        Wind
                    </Text>
                    <Text style={ styles.itemValue }>
                        mph | kmh
                    </Text>
                </View>

                <View>

                    <Text style={ styles.itemName }>
                        Humidity
                    </Text>
                    <Text style={ styles.itemValue }>
                        %
                    </Text>

                    <Text style={ styles.itemName }>
                        Sunset
                    </Text>
                    <Text style={ styles.itemValue }>
                        PM
                    </Text>

                    <Text style={ styles.itemName }>
                        Pressure
                    </Text>
                    <Text style={ styles.itemValue }>
                        hPa
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