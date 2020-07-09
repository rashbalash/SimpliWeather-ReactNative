import React from 'react';
import { ScrollView, StyleSheet, View, Text, StatusBar } from 'react-native';
import WeatherPanel from '../WeatherPanel/WeatherPanel';
import LocationPanelContainer from '../LocationPanel/LocationPanelContainer';

export default function AppWrapper(props) {

    const { colors } = props.theme;
    const barTextColor = colors.text === '#ffffff' ? 'light-content' : 'dark-content';
    const barColor = colors.background === '#121212' ? '#121212' : '#f6f6f6';

    return (
      <View style={ [styles.contentWrapper, { backgroundColor: colors.background }] }>
          <StatusBar barStyle={barTextColor} backgroundColor={barColor} translucent={true} />
          {/* Title and Location Name */}
          {/* <TitleContainer /> */}
          <View style={ styles.HeaderWrapper}>
            <Text style={ [styles.HeaderTitle, { color: colors.text }] }>SimpliWeather</Text>
          </View>
          <ScrollView 
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            pagingEnabled
          >
            <WeatherPanel />
            <WeatherPanel />
          </ScrollView>
      
          <LocationPanelContainer style={ {backgroundColor: colors.background, color: colors.text } } isModalOpen={ props.locationName } />
      </View>
    )
}

const styles = StyleSheet.create({
    HeaderTitle: {
        fontSize: 36,
    },
    HeaderWrapper: {
        paddingTop: 20,
        margin: "auto",
        alignItems: "center",
    },
    contentWrapper: {
        paddingTop: 20,
        padding: 10,
    },
});