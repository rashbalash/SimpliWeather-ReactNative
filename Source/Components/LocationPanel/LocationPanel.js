import React from 'react';

import { View, Modal, Button, StyleSheet, Text, TextInput } from 'react-native';
import store from '../../Redux/CreateStore';
import * as Location from 'expo-location';

import { getNewLocation } from '../../Redux/Actions/Actions';

export default function LocationPanel(props) {

    const modalVisible = props.locationName === null ? true : false;

    return(
        <View>
            <Modal animationType="slide"
                    visible={modalVisible}
                    presentationStyle={"fullScreen"}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                    
                            <Text style={ styles.panelDescription }>
                                Welcome to SimpliWeather
                            </Text>
                        
                            <Button title="Allow SimpliWeather to use your location" onPress={ () => store.dispatch(getNewLocation()) }></Button>                        

                            <Text style={ styles.panelDescription }>
                                or enter a City or Zipcode
                            </Text>
                            <TextInput
                            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                            onChangeText={text => onChangeText(text)}
                            value={"Enter a City or ZipCode"}
                            />

                        </View>
                    </View>
            </Modal>
        </View>
    );
}


const styles = StyleSheet.create({
    panelDescription: {
      fontSize: 15,
      textAlign: "center",
    },
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      width: '100%',
    },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
    },
});