import React from "react";
import { StyleSheet } from "react-native";

import SettingsContainer from "../Settings/SettingsContainer";
import AppWrapperContainer from "../AppWrapper/AppWrapperContainer";
import {
  DefaultTheme,
  DarkTheme,
  Provider as PaperProvider,
} from "react-native-paper";

import { theme } from "../../Constants";
import * as Notifications from "expo-notifications";

// Prepare the notification channel
Notifications.setNotificationChannelAsync("New-Weather-Alert", {
  name: "E-mail notifications",
  importance: Notifications.AndroidImportance.HIGH,
  sound: "email-sound.wav", // <- for Android 8.0+, see channelId property below
});

// Eg. schedule the notification
Notifications.scheduleNotificationAsync({
  content: {
    title: "There is a weather alert in your area",
    body: "",
    sound: "email-sound.wav", // <- for Android below 8.0
  },
  trigger: {
    seconds: 3,
    channelId: "New-Weather-Alert", // <- for Android 8.0+, see definition above
  },
});

export default function ContentWrapper(props) {
  return (
    <PaperProvider
      theme={props.theme === theme.DARK ? DarkTheme : DefaultTheme}
      style={styles.appWrapper}
    >
      <AppWrapperContainer />
      <SettingsContainer />
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  appWrapper: {
    flex: 1,
  },
});
