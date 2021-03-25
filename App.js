import React, { useCallback, useEffect, useState} from 'react';

import * as SplashScreen from 'expo-splash-screen';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import store from './Source/Redux/CreateStore';
import ContentWrapperContainer from './Source/Components/ContentWrapper/ContentWrapperContainer';

export default function App() {  

  const [appIsReady, setAppIsready] = useState(false);

  useEffect(() => {
    async function prepare() {
      try{
        await new Promise(resolve => setTimeout(resolve, 1));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsready(true);
      }
    }
    prepare();
  }, []);

const onLayoutRootView = useCallback(async () => {
  if (appIsReady) {
    await SplashScreen.hideAsync();
  }
}, [appIsReady]);

const content =  !appIsReady ? (<View style={{ backgroundColor: "#121212", height: "100%", width: "100%"}} />) : (<ContentWrapperContainer />);


  return (
    <Provider store={store} onLayout={onLayoutRootView}>
      {content}
    </Provider>
  );
}