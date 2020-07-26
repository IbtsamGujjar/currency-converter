import React from 'react';
import { Provider } from 'react-redux';
import { AppLoading } from 'expo';
import { useFonts } from 'expo-font';

import { AppNavigator } from './navigation/AppNavigator';

import { store } from './store/store';

const openSansFont = require('./assets/fonts/OpenSans-Regular.ttf');
const openSansBoldFont = require('./assets/fonts/OpenSans-Bold.ttf');

const App = () => {
  const [fontsLoaded] = useFonts({
    'open-sans': openSansFont,
    'open-sans-bold': openSansBoldFont,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
};

export default App;
