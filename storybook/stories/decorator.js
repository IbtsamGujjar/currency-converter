import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from 'expo-font';

const openSansFont = require('../../assets/fonts/OpenSans-Regular.ttf');
const openSansBoldFont = require('../../assets/fonts/OpenSans-Bold.ttf');

const style = {
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
};

export const WithFonts = ({ children }) => {
  const [fontsLoaded] = useFonts({
    'open-sans': openSansFont,
    'open-sans-bold': openSansBoldFont,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return <View style={style.main}>{children}</View>;
};

WithFonts.defaultProps = {
  children: null,
};

WithFonts.propTypes = {
  children: PropTypes.node,
};

export function CenterView({ children }) {
  return <View style={style.main}>{children}</View>;
}

CenterView.defaultProps = {
  children: null,
};

CenterView.propTypes = {
  children: PropTypes.node,
};
