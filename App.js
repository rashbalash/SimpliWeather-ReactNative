import React from 'react';
import { ScrollView, StyleSheet, View, RefreshControl } from 'react-native';

import HeaderContainer from './Source/Components/Header/HeaderContainer';
import WeatherPanel from './Source/Components/WeatherPanel/WeatherPanel';
import SettingsContainer from './Source/Components/Settings/SettingsContainer';
import LocationPanelContainer from './Source/Components/LocationPanel/LocationPanelContainer';

import { Provider as PaperProvider } from 'react-native-paper';
import { Provider } from 'react-redux';
import store from './Source/Redux/CreateStore';

import { refresh } from './Source/Redux/Actions/Actions';

export default function App() {

  const onRefresh = React.useCallback(() => {
    store.dispatch(refresh())
  });
  
  return (
    <Provider store={store}>
      <PaperProvider>
      <View style={ styles.appWrapper }>
        <ScrollView refreshControl={ <RefreshControl refreshing={store.getState().reducer.refreshing} onRefresh={onRefresh} /> }>
        <View style={styles.contentWrapper}>
          
          {/* Title and Location Name */}
          <HeaderContainer />
          
          <WeatherPanel />

          <LocationPanelContainer isModalOpen={ store.getState().reducer.locationName } />

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
