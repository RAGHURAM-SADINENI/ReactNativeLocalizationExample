/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import AppRouting from './src/app/routing/AppRouting';

import store from './src/redux/Store';
import { Provider } from 'react-redux';

const App = () => {
  return (
    <Provider store={store}>
      <AppRouting />
    </Provider>
  );
};

export default App;
