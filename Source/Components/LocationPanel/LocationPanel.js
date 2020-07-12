import React, { useRef } from 'react';
import { Animated, View, Modal, StyleSheet, Text, KeyboardAvoidingView } from 'react-native';
import WeatherIcon from '../WeatherIcon/WeatherIcon';
import LocationPanelSubmitContainer from '../LocationPanelSubmit/LocationPanelSubmitContainer';

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

    return(       
        <Modal animationType="slide"
                visible={modalVisible}
                presentationStyle={"overFullScreen"}
                transparent
                statusBarTranslucent
        >          
        <KeyboardAvoidingView 
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        style={{flex: 1}}
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

            <FadeInViewTwo>
              <LocationPanelSubmitContainer />
            </FadeInViewTwo>
          </View>
          </KeyboardAvoidingView>
        </Modal>
  );
}

const styles = StyleSheet.create({
    panelTitle: {
      fontSize: 46,
      textAlign: "center",
      paddingTop: 30
    },
    centeredView: {
      flex: 1,
      alignItems: "center",
      flexDirection: 'column',
      justifyContent: "space-between",
      width: '100%',
      paddingBottom: 10
    }
});