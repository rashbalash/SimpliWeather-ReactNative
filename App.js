import React, { StrictMode } from 'react';

import { Provider } from 'react-redux';
import store from './Source/Redux/CreateStore';
import ContentWrapperContainer from './Source/Components/ContentWrapper/ContentWrapperContainer';

export default function App() {  
  return (
    <Provider store={store} style={{backgroundColor: 'black'}}>
      <ContentWrapperContainer />
    </Provider>
  );
}