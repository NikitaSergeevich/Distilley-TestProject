import React from 'react';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';

//import {createStore} from 'redux';
import {Provider} from 'react-redux';

import Main from './src/screens/main';

import store from './src/redux/store';
const App = () => {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => App);
