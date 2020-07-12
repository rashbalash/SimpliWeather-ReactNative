import { Animated, View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import React, { useRef, useState } from 'react';

import SimpliWeatherTextContainer from '../SimpliWeatherText/SimpliWeatherTextContainer';
import TextInputSearch from '../TextInputSearch/TextInputSearch';

export default function LocationPanelSubmit(props) {

    const [textInputVisible, setTextInputVisible] = useState(false);
    const [submitText, setText] = useState('');

    const FadeInViewTwo = (props) => {
        const fadeAnim = useRef(new Animated.Value(0)).current  // Initial value for opacity: 0
      
        React.useEffect(() => {
          Animated.timing(
            fadeAnim,
            {
              toValue: 1,
              duration: 500,
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

    const isZipCode = (submitText) => {
      return !isNaN(parseInt(submitText));
    }

    if (textInputVisible === true) {
      return (
      <View>
        <TextInputSearch submitText={submitText} setText={setText} />

        <View style={ styles.currentLocationView }>
          <TouchableOpacity
            style={styles.continueButton}
            onPress={ () => { 
              
              if (isZipCode(submitText)) {
                props.setLocationZip(parseInt(submitText));
                props.closeModal();
              } else {
                props.setLocationCity(submitText);
                props.closeModal();
              }
            
            } }
            >
            <Text style={styles.continueText}>Continue</Text>
          </TouchableOpacity>
        </View>

        <FadeInViewTwo>
            <TouchableOpacity onPress={ () => setTextInputVisible(!textInputVisible) } style={ styles.cityOrZipcodeContainer}><Text style={{ color: '#ED1C24', fontSize: 16 }}>Use your current location</Text></TouchableOpacity>
        </FadeInViewTwo>
      </View>
      );
    } else {
      return (
        <View>
          <View style={ styles.currentLocationView }>
            <SimpliWeatherTextContainer style= { styles.panelContext } >Allow SimpliWeather to use your current location</SimpliWeatherTextContainer>
            
            
            <TouchableOpacity
              style={styles.continueButton}
              onPress={ () => {
                props.getNewLocation();
                props.closeModal();
              }  }
              >
              <Text style={styles.continueText}>Continue</Text>
            </TouchableOpacity>
          </View>

          <FadeInViewTwo>
              <TouchableOpacity onPress={ () => setTextInputVisible(!textInputVisible) } style={ styles.cityOrZipcodeContainer}><Text style={{ color: '#ED1C24', fontSize: 16 }}>Use City Name or ZipCode</Text></TouchableOpacity>
          </FadeInViewTwo>
        </View>
      );
    }
  }


  
const styles = StyleSheet.create({
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
      width: '100%',
    },
    continueText:{
      color:'#fff',
      textAlign:'center',
      fontSize: 22,
    },
    cityOrZipcodeContainer: {
      marginTop: 10,
      alignItems: "center",
    },
});