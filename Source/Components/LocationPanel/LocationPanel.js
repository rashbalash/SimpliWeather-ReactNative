import React, { useRef, useEffect } from 'react';

import { Animated, View, Modal, Button, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';
import store from '../../Redux/CreateStore';

import { getNewLocation } from '../../Redux/Actions/Actions';
import SimpliWeatherTextContainer from '../SimpliWeatherText/SimpliWeatherTextContainer';
import WeatherIcon from '../WeatherIcon/WeatherIcon';

export default function LocationPanel(props) {

    const modalVisible = props.locationName === null ? true : false;
    const backgroundColor = props.style.backgroundColor;
    const fontColor = props.style.color;
        
    const FadeInView = (props) => {
      const fadeAnim = useRef(new Animated.Value(0)).current  // Initial value for opacity: 0
    
      React.useEffect(() => {
        Animated.timing(
          fadeAnim,
          {
            toValue: 1,
            duration: 1000,
          }
        ).start();
      }, [])
    
      return (
        <Animated.View                 // Special animatable View
          style={{
            ...props.style,
            opacity: fadeAnim,         // Bind opacity to animated value
          }}
        >
          {props.children}
        </Animated.View>
      );
    }
    const FadeInViewTwo = (props) => {
      const fadeAnim = useRef(new Animated.Value(0)).current  // Initial value for opacity: 0
    
      React.useEffect(() => {
        Animated.timing(
          fadeAnim,
          {
            toValue: 1,
            duration: 1300,
          }
        ).start();
      }, [])
    
      return (
        <Animated.View                 // Special animatable View
          style={{
            ...props.style,
            opacity: fadeAnim,         // Bind opacity to animated value
          }}
        >
          {props.children}
        </Animated.View>
      );
    }
    const FadeInViewThree = (props) => {
      const fadeAnim = useRef(new Animated.Value(0)).current  // Initial value for opacity: 0
    
      React.useEffect(() => {
        Animated.timing(
          fadeAnim,
          {
            toValue: 1,
            duration: 2000,
          }
        ).start();
      }, [])
    
      return (
        <Animated.View                 // Special animatable View
          style={{
            ...props.style,
            opacity: fadeAnim,         // Bind opacity to animated value
          }}
        >
          {props.children}
        </Animated.View>
      );
    }


    return(
      <View>
        <Modal animationType="slide"
                visible={modalVisible}
                presentationStyle={"overFullScreen"}
                
                statusBarTranslucent
        >
          <View style={ [styles.centeredView, { backgroundColor: backgroundColor }]}>
            <FadeInView>
              <Text  style={ [styles.panelTitle, { color: fontColor }] }>
                Welcome to SimpliWeather
              </Text >
            </FadeInView>

            <FadeInViewTwo>
              <WeatherIcon icon={'clear'} isDay={false} style={{ width: 150, height: 150 }}/>
            </FadeInViewTwo>

            <View>
              <FadeInViewTwo style={ styles.currentLocationView }>
                <SimpliWeatherTextContainer style= { styles.panelContext } >Allow SimpliWeather to use your location</SimpliWeatherTextContainer>
                
                <TouchableOpacity
                  style={styles.continueButton}
                  onPress={ () => store.dispatch(getNewLocation()) }
                  >
                  <Text style={styles.continueText}>Continue</Text>
                </TouchableOpacity>
              </FadeInViewTwo>

              <FadeInViewThree>
                  <TouchableOpacity style={ styles.cityOrZipcodeContainer}><Text style={{ color: '#ED1C24', fontSize: 16 }}>Use City Name or Zipcode</Text></TouchableOpacity>
              </FadeInViewThree>
            </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
    panelTitle: {
      fontSize: 46,
      textAlign: "center",
      paddingTop: 40
    },
    centeredView: {
      flex: 1,
      alignItems: "center",
      flexDirection: 'column',
      justifyContent: "space-between",
      width: '100%',
      paddingBottom: 10
    },
    panelContext: {
      fontSize: 24,
      textAlign: "center",
      alignItems: "center",
      width: 300,
    },
    currentLocationView: {
      alignItems: "center",
    },
    continueButton:{
      marginTop:10,
      paddingTop:15,
      paddingBottom:15,
      backgroundColor:'#ED1C24',
      borderRadius:15,
    },
    continueText:{
      color:'#fff',
      textAlign:'center',
      fontSize: 22,
      paddingLeft : 110,
      paddingRight : 105    
    },
    cityOrZipcodeContainer: {
      marginTop: 10,
      alignItems: "center",
    },

});