import React from "react";
import { useTheme } from "react-native-paper";
import { TextInput, StyleSheet } from "react-native";

export default function TextInputSearch(props) {
  const { colors } = useTheme();
  const fontColor = colors.text;

  return (
    <TextInput
      keyboardAppearance={"dark"}
      blurOnSubmit
      placeholder="Enter a City Name or ZipCode"
      placeholderTextColor={fontColor}
      style={[styles.textInput, { borderColor: fontColor, color: fontColor }]}
      onChangeText={(submitText) => props.setText(submitText)}
      value={props.submitText}
      key={"cityZipInput"}
    />
  );
}

const styles = StyleSheet.create({
  textInput: {
    fontSize: 16,
    textAlign: "center",
    height: 60,
    borderWidth: 1,
    borderRadius: 15,
  },
});
