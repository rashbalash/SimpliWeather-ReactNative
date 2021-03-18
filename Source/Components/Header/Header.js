import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Header(props) {
  return (
    <View style={styles.HeaderWrapper}>
      <Text style={styles.HeaderCityName}>{props.locationName}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  HeaderWrapper: {
    margin: "auto",
    alignItems: "center",
  },

  HeaderCityName: {
    fontSize: 20,
    color: "#1976d2",
  },
});
