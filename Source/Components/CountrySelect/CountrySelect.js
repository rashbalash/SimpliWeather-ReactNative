import React from "react";
import { useTheme } from "react-native-paper";
import { StyleSheet, View, Platform } from "react-native";
import CountryPicker, {
  DARK_THEME,
  LIGHT_THEME,
  getAllCountries,
} from "react-native-country-picker-modal";

export default function CountrySelect(props) {
  const { colors } = useTheme();
  const fontColor = colors.text;
  const flagTheme = fontColor === "#ffffff" ? DARK_THEME : LIGHT_THEME;
  const overriddenTheme = {
    ...flagTheme,
    flagSizeButton: Platform.select({ android: 25, default: 30 }),
  };
  const onSelect = (country) => {
    props.setCountryCode(country.cca2);
  };

  return (
    <View
      style={[styles.pickerStyle, { borderColor: fontColor, color: fontColor }]}
    >
      <CountryPicker
        countryCode={props.countryCode}
        withEmoji={true}
        withFlagButton={true}
        withCountryNameButton={false}
        theme={overriddenTheme}
        onSelect={onSelect}
        containerButtonStyle={styles.flagPicker}
        withFilter={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  pickerStyle: {
    fontSize: 16,
    height: 60,
    width: 60,
    borderWidth: 1,
    borderRadius: 15,
  },
  flagPicker: {
    alignItems: "center",
    justifyContent: "center",
    height: Platform.select({ android: 56, default: 60 }),
    width: 60,
    margin: 0,
    paddingLeft: Platform.select({ android: 7, default: 5 }),
  },
});
