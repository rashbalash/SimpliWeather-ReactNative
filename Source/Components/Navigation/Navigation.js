import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';

class Navigation extends Component {
    render() {
        return (
            <View style={ styles.NavigationWrapper }>
                    <Text style={ styles.NavigationLocationNames }>City Name</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    NavigationWrapper: {
        display: "flex",
        justifyContent: "center",
        padding: 10
    },
    NavigationLocationNames: {
        fontSize: 16,
        alignSelf: "center",
    }
})

export default Navigation;