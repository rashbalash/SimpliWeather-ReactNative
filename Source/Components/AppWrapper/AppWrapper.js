import React, { useRef, useEffect } from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  RefreshControl,
} from "react-native";
import WeatherPanel from "../WeatherPanel/WeatherPanel";
import LocationPanelContainer from "../LocationPanel/LocationPanelContainer";
import {
  registerScrollView,
  deRegisterScrollView,
} from "../../Redux/Middleware/paginationMiddleware";

const Pages = (props) => {
  const weatherPanels = [];

  for (let i = 0; i < props.allLocations.length; ++i) {
    weatherPanels.push(
      <View key={i}>
        <WeatherPanel location={props.allLocations[i]} index={i} />
      </View>
    );
  }

  return weatherPanels;
};

export default function AppWrapper(props) {
  const scrollView = useRef(null);

  useEffect(() => {
    if (scrollView === null || scrollView === undefined) {
      return;
    }
    registerScrollView(scrollView);
    return () => {
      deRegisterScrollView(scrollView);
    };
  }, [scrollView]);

  const { colors } = props.theme;
  const barTextColor =
    colors.text === "#ffffff" ? "light-content" : "dark-content";
  const barColor = colors.background === "#121212" ? "#121212" : "#f6f6f6";

  return (
    <ScrollView
      style={{ backgroundColor: barColor }}
      refreshControl={
        <RefreshControl
          tintColor="red"
          refreshing={props.refreshing}
          onRefresh={props.onRefresh}
        />
      }
    >
      <View
        style={[styles.contentWrapper, { backgroundColor: colors.background }]}
      >
        <StatusBar
          barStyle={barTextColor}
          backgroundColor={barColor}
          translucent={true}
        />

        <View style={styles.HeaderWrapper}>
          <Text style={[styles.HeaderTitle, { color: colors.text }]}>
            SimpliWeather
          </Text>
        </View>

        <ScrollView
          horizontal={true}
          ref={scrollView}
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          onScroll={(e) => props.setCurrentPage(e)}
          scrollEventThrottle={0}
        >
          <Pages allLocations={props.allLocations} />
        </ScrollView>

        <LocationPanelContainer
          style={{ backgroundColor: colors.background, color: colors.text }}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  HeaderTitle: {
    fontSize: 30,
  },
  HeaderWrapper: {
    paddingTop: 50,
    margin: "auto",
    alignItems: "center",
  },
  contentWrapper: {
    padding: 10,
  },
});
