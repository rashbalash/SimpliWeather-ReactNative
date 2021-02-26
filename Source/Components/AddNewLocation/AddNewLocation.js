import React from "react";
import { Modal, StyleSheet, View, KeyboardAvoidingView } from "react-native";

import { IconButton } from "react-native-paper";
import SimpliWeatherTextContainer from "../SimpliWeatherText/SimpliWeatherTextContainer";
import SimpliWeatherViewContainer from "../SimpliWeatherView/SimpliWeatherViewContainer";
import LocationPanelSubmitContainer from "../LocationPanelSubmit/LocationPanelSubmitContainer";

export default function AddNewLocation(props) {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={props.isModalOpen}
      onRequestClose={props.closeModal}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <View style={styles.centeredView}>
          <SimpliWeatherViewContainer style={styles.modalView}>
            <SimpliWeatherTextContainer style={styles.modalText}>
              Add New Location
            </SimpliWeatherTextContainer>
            <IconButton
              icon="close"
              size={30}
              onPress={() => props.closeModal()}
              style={styles.closeButton}
            />

            <LocationPanelSubmitContainer closeModal={props.closeModal} />
          </SimpliWeatherViewContainer>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    width: "100%",
    maxWidth: 700,
    height: "50%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 30,
    justifyContent: "space-between",
  },
  modalText: {
    marginBottom: 15,
    fontSize: 30,
    textAlign: "center",
  },
  closeButton: {
    position: "absolute",
    right: 0,
    top: 0,
    height: 30,
    width: 30,
  },
});
