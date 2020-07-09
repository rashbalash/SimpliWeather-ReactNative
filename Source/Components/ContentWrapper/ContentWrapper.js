import React from 'react';
import { ScrollView, StyleSheet, RefreshControl } from 'react-native';

import SettingsContainer from '../Settings/SettingsContainer';
import AppWrapperContainer from '../AppWrapper/AppWrapperContainer';
import { DefaultTheme, DarkTheme, Provider as PaperProvider } from 'react-native-paper';

import { theme } from '../../Constants';

export default function ContentWrapper(props) {

    return (
        <PaperProvider theme={ props.theme === theme.DARK ? DarkTheme : DefaultTheme } style={ styles.appWrapper }>
            <ScrollView refreshControl={ <RefreshControl refreshing={ props.refreshing } onRefresh={ props.onRefresh } /> }>
                <AppWrapperContainer />
            </ScrollView>
            <SettingsContainer />
        </PaperProvider>
    )
}
    
const styles = StyleSheet.create({
    appWrapper: {
      flex: 1,
    },
});