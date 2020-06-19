import React from 'react';
import { ScrollView, StyleSheet, Text, View, Button } from 'react-native';

import HeaderContainer from './Source/Components/Header/HeaderContainer';
import CurrentWeatherContainer from './Source/Components/CurrentTemperature/CurrentWeatherContainer';
import DailyWeatherContainer from './Source/Components/DailyTemperature/DailyWeatherContainer';
import HourlyWeatherContainer from './Source/Components/HourlyTemperature/HourlyWeatherContainer';
import MoreContainer from './Source/Components/MoreAboutToday/MoreContainer';
import SettingsContainer from './Source/Components/Settings/SettingsContainer';

import { Provider as PaperProvider } from 'react-native-paper';
import { Provider } from 'react-redux';
import store from './Source/Redux/CreateStore';

export default function App() {
  return (
    <Provider store={store}>
      <PaperProvider>
      <View style={ styles.appWrapper }>
        <ScrollView>
        <View style={styles.contentWrapper}>
          
          {/* Title and Location Name */}
          <HeaderContainer />

          {/* Current */}
          <CurrentWeatherContainer />

          {/* Hourly */}
          <HourlyWeatherContainer />

          {/* Daily */}
          <DailyWeatherContainer />

          {/* More About Today */}
          <MoreContainer />
          
        </View>
        </ScrollView>
        <SettingsContainer />
      </View>
      </PaperProvider>
    </Provider>

  );
}

const styles = StyleSheet.create({
  appWrapper: {
    flex: 1,
  },
  contentWrapper: {
    paddingTop: 20,
    padding: 15,
  }
});
