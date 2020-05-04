import React, { Component } from 'react';

import { createMaterialBottomTabNavigation } from 'react-navigation-material-bottom-tabs';

class CurrentLocation extends Component {
    render() {
        return (
            <View>
                <Text>Current Location</Text>
            </View>
        );
    }
}

class Bethesda extends Component {
    render() {
        return (
            <View>
                <Text>Bethesda</Text>
            </View>
        );
    }
}

export default createMaterialBottomTabNavigation({
    CurrentLocation: { screen: CurrentLocationScreen }, 
    Bethesda: { screen: BethesdaScreen }
})