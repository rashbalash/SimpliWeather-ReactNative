import React, { useState } from "react";
import {
  View,
  Modal,
  StyleSheet,
  ScrollView,
  Switch,
  TouchableOpacity,
  Text,
  Linking,
} from "react-native";
import SimpliWeatherTextContainer from "../SimpliWeatherText/SimpliWeatherTextContainer";
import SimpliWeatherViewContainer from "../SimpliWeatherView/SimpliWeatherViewContainer";
import About from "../About/About";
import { IconButton, useTheme, ToggleButton } from "react-native-paper";

export default function SettingsPage(props) {
  const { colors } = useTheme();

  const [aboutModalOpen, setAboutModalOpen] = useState(false);

  const unitIcon =
    props.weatherUnit === "metric"
      ? "temperature-celsius"
      : "temperature-fahrenheit";

  return (
    <Modal
      animationType="slide"
      visible={props.isModalOpen}
      onRequestClose={props.closeModal}
      presentationStyle={"fullScreen"}
    >
      <ScrollView style={{ backgroundColor: colors.background }}>
        <View style={(styles.centeredView, { paddingTop: 60 })}>
          <SimpliWeatherViewContainer style={styles.modalView}>
            <View style={styles.modalHeader}>
              <SimpliWeatherTextContainer style={styles.settingsTitle}>
                Settings
              </SimpliWeatherTextContainer>
              <IconButton
                icon="close"
                size={30}
                onPress={() => props.closeModal()}
                style={styles.closeButton}
              />
            </View>

            <SimpliWeatherTextContainer style={styles.subTitles}>
              General
            </SimpliWeatherTextContainer>
            <View style={styles.settingTogglesContainer}>
              <SimpliWeatherTextContainer style={styles.settingDescriptions}>
                Fahrenheit or Celsius
              </SimpliWeatherTextContainer>
              <ToggleButton
                style={styles.toggleButtonStyles}
                icon={unitIcon}
                onPress={() => props.onUnitChange()}
              />
            </View>
            <View style={styles.settingTogglesContainer}>
              <SimpliWeatherTextContainer style={styles.settingDescriptions}>
                Dark or Light Mode
              </SimpliWeatherTextContainer>
              <ToggleButton
                style={styles.toggleButtonStyles}
                icon="theme-light-dark"
                onPress={() => props.onThemeChange()}
              />
            </View>
            <SimpliWeatherTextContainer style={styles.subTitles}>
              Quick Actions
            </SimpliWeatherTextContainer>
            <View style={styles.settingTogglesContainer}>
              <SimpliWeatherTextContainer style={styles.settingDescriptions}>
                Temperature Toggle
              </SimpliWeatherTextContainer>
              <Switch
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={props.showUnitAction ? "#f5dd4b" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={props.onShowUnitAction}
                value={props.showUnitAction}
              />
            </View>
            <View style={styles.settingTogglesContainer}>
              <SimpliWeatherTextContainer style={styles.settingDescriptions}>
                Dark Mode Toggle
              </SimpliWeatherTextContainer>
              <Switch
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={props.showThemeAction ? "#f5dd4b" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={props.onShowThemeAction}
                value={props.showThemeAction}
              />
            </View>
            {/* Quick Action Button Placement */}
            {/* Bottom Left, Bottom Right, Top Left, Top Right */}

            {/* Push Notifications */}
            {/* <SimpliWeatherTextContainer style={styles.subTitles}>
              Push Notifications (Coming Soon!)
            </SimpliWeatherTextContainer> */}

            <SimpliWeatherTextContainer style={styles.subTitles}>
              Other
            </SimpliWeatherTextContainer>
            <View style={styles.settingsOtherButtons}>
              <TouchableOpacity
                style={styles.continueButton}
                onPress={() =>
                  Linking.openURL(
                    "mailto:Rashad.Balashov@gmail.com?subject=SimpliWeather Bug Report&body=Please add a description and screenshots if you have any!"
                  )
                }
              >
                <Text style={styles.continueText}>Bug Report</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.settingsOtherButtons}>
              <TouchableOpacity
                style={styles.continueButton}
                onPress={() =>
                  Linking.openURL(
                    "mailto:Rashad.Balashov@gmail.com?subject=SimpliWeather Feature Request&body=Please describe what your feature request is!"
                  )
                }
              >
                <Text style={styles.continueText}>Feature Request</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.settingsOtherButtons}>
              <TouchableOpacity
                style={styles.continueButton}
                onPress={() =>
                  Linking.openURL(
                    "https://paypal.me/RashadBalashov?locale.x=en_US"
                  )
                }
              >
                <Text style={styles.continueText}>Donate</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.settingsOtherButtons}>
              <TouchableOpacity
                style={styles.continueButton}
                onPress={() => {
                  setAboutModalOpen(!aboutModalOpen);
                }}
              >
                <Text style={styles.continueText}>About</Text>
              </TouchableOpacity>
            </View>
          </SimpliWeatherViewContainer>
        </View>
        <View
          style={{
            borderBottomColor: "black",
            marginTop: 20,
            marginBottom: 20,
            alignSelf: "stretch",
          }}
        ></View>
      </ScrollView>
      <About
        isModalOpen={aboutModalOpen}
        closeModal={() => setAboutModalOpen(!aboutModalOpen)}
      />
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalHeader: {
    flexDirection: "row",
    flexWrap: "nowrap",
    alignItems: "center",
    justifyContent: "center",
    minWidth: "100%",
  },
  closeButton: {
    position: "absolute",
    right: 10,
    top: 5,
    height: 30,
    width: 30,
  },
  settingsTitle: {
    fontSize: 36,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    alignItems: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  subTitles: {
    fontSize: 24,
    display: "flex",
    alignSelf: "flex-start",
    paddingLeft: 20,
    paddingTop: 20,
    paddingBottom: 5,
  },
  subSettingsContainer: {},
  continueButton: {
    marginTop: 10,
    paddingTop: 15,
    paddingBottom: 15,
    backgroundColor: "#ED1C24",
    borderRadius: 15,
    paddingLeft: 90,
    paddingRight: 90,
    width: "100%",
  },
  continueText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 20,
  },
  settingDescriptions: {
    fontSize: 20,
  },
  settingTogglesContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    padding: 10,
    alignItems: "center",
  },
  settingsOtherButtons: {
    width: 330,
  },
  toggleButtonStyles: {
    borderWidth: 1,
    borderRadius: 15,
  },
});
