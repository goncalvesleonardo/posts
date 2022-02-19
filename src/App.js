import 'react-native-gesture-handler';

import React from 'react';
import {StatusBar, SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';

import store from './store';

import Routes from './routes';

const App = () => (
  <Provider store={store}>
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <SafeAreaView style={{flex: 1, backgroundColor: '#000'}}>
        <Routes />
      </SafeAreaView>
    </NavigationContainer>
  </Provider>
);

export default App;
