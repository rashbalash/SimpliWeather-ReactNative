import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';

class Settings extends Component {
    render() {
        return (
            <View style={ styles.SettingsWrapper }>
                <Button title="Click"></Button>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    SettingsWrapper: {
        display: "flex",
        justifyContent: "center",
        padding: 10
    },
})

export default Settings;