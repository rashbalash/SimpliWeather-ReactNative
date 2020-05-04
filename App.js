import React from 'react';
import { ScrollView, StyleSheet, Text, View, Button, TextInput } from 'react-native';

import Header from './Source/Components/Header/Header';
import Current from './Source/Components/CurrentTemperature/Current';
import Daily from './Source/Components/DailyTemperature/Daily';
import Hourly from './Source/Components/HourlyTemperature/Hourly';
import More from './Source/Components/MoreAboutToday/More';
import Navigation from './Source/Components/Navigation/Navigation';

export default function App() {
  return (
    <ScrollView>
    <View style={styles.appWrapper}>
      {/* Title and Location Name */}
      <Header />

      {/* Current */}
      <Current />

      {/* Hourly */}
      <Hourly />

      {/* Daily */}
      <Daily />

      {/* More About Today */}
      <More />

      {/* Navigation */}
      <Navigation />
        {/* Menu */}

        {/* City Name */}
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  appWrapper: {
    padding: 20,
  }
});
