import React, { useState, useEffect } from "react";
import { View, Modal, StyleSheet, Platform } from "react-native";
import SimpliWeatherTextContainer from "../SimpliWeatherText/SimpliWeatherTextContainer";
import SimpliWeatherViewContainer from "../SimpliWeatherView/SimpliWeatherViewContainer";
import { IconButton, useTheme } from "react-native-paper";

import DraggableFlatList from "react-native-draggable-flatlist";
import LocationRow from "./LocationRow";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const renderItem = ({ item, index, drag, isActive }) => {
  return (
    <LocationRow item={item} index={index} drag={drag} isActive={isActive} />
  );
};

export default function AllLocations(props) {
  const { colors } = useTheme();

  const [data, setData] = useState(props.locationsList);

  useEffect(() => {
    setData(props.locationsList);
  }, [props.locationsList]);

  return (
    <Modal
      animationType="slide"
      visible={props.isModalOpen}
      onRequestClose={props.closeModal}
      presentationStyle={"fullScreen"}
    >
      <GestureHandlerRootView>
        <View style={{ backgroundColor: colors.background }}>
          <View style={(styles.centeredView, { paddingTop: 45 })}>
            <SimpliWeatherViewContainer style={styles.modalView}>
              <View style={styles.modalHeader}>
                <SimpliWeatherTextContainer style={styles.settingsTitle}>
                  All Locations
                </SimpliWeatherTextContainer>
                <IconButton
                  icon="close"
                  size={30}
                  onPress={() => {
                    props.refreshOnClose();
                    props.closeModal();
                  }}
                  style={styles.closeButton}
                />
              </View>
            </SimpliWeatherViewContainer>
            <View
              style={{ backgroundColor: colors.background, height: "100%" }}
            >
              <DraggableFlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item, index) =>
                  `draggable-item-${item.locationName}`
                }
                onDragEnd={({ data }) => {
                  props.updateLocation(data);
                  setData(data);
                }}
              />
            </View>
          </View>
          <View
            style={{
              borderBottomColor: "black",
              marginTop: 20,
              marginBottom: 20,
              alignSelf: "stretch",
            }}
          ></View>
        </View>
      </GestureHandlerRootView>
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
    paddingBottom: 10,
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
  list: {
    flex: 1,
  },
  contentContainer: {
    width: window.width,

    ...Platform.select({
      ios: {},

      android: {
        paddingHorizontal: 0,
      },
    }),
  },
});
