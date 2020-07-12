import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import { FAB, Portal, Provider } from 'react-native-paper';

import About from '../About/About';
import AddNewLocation from '../AddNewLocation/AddNewLocation';

class Settings extends Component {

    state = {
        open: false,
        aboutModalOpen: false,
        isAddingLocation: false,
    };
    
    _onStateChange = ({ open }) => this.setState({ open });

    render() {

        const { open } = this.state;

        return (
            <View>
                <Portal>
                    <FAB.Group
                        open={open}
                        icon={open ? 'close' : 'dots-vertical'}
                        actions={[
                        { icon: 'information', label: 'About', onPress: () => this.setState({ aboutModalOpen: true })},
                        { icon: 'plus', label: 'Add a Location', onPress: () => this.setState({ isAddingLocation: true }) },
                        { icon: 'minus', label: 'Remove Location', onPress: () => this.props.removeLocation() },
                        { icon: 'brightness-4', label: 'Dark or Light Mode', onPress: () => this.props.onThemeChange() }, // white-balance-sunny
                        { icon: 'temperature-fahrenheit', label: 'Fahrenheit or Celsius', onPress: () => this.props.onUnitChange() }, // temperature-celsius
                        ]}
                        small
                        onStateChange={this._onStateChange}
                        onPress={() => {
                        
                        }}
                        fabStyle={styles.fab}
                    />
                </Portal>

                <AddNewLocation isModalOpen = { this.state.isAddingLocation } closeModal= {() => this.setState({ isAddingLocation: false })}/>
                <About isModalOpen={ this.state.aboutModalOpen } closeModal={ () => this.setState({ aboutModalOpen: false }) }/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    fab: {
        backgroundColor: '#D64045'
    },
})

export default Settings;