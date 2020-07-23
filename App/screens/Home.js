/* eslint-disable react/style-prop-object */
import React from 'react';
import { View, StyleSheet, Image, Dimensions } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { Input } from '../components/Input/Input';
import { Colors } from '../../constants/colors';

const background = require('../../assets/images/background.png');
const logo = require('../../assets/images/logo.png');

const screen = Dimensions.get('window');

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.grey,
    justifyContent: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  logoBackground: {
    width: screen.width / 0.45,
    height: screen.width * 0.45,
  },
  logo: {
    position: 'absolute',
    width: screen.width * 0.25,
    height: screen.width * 0.25,
  },
});

const Home = () => {
  return (
    <View style={styles.screen}>
      <StatusBar translucent style="light" backgroundColor={Colors.grey} />
      <View style={styles.logoContainer}>
        <Image
          source={background}
          style={styles.logoBackground}
          resizeMode="contain"
        />
        <Image source={logo} style={styles.logo} resizeMode="contain" />
      </View>
      <Input
        buttonText="USD"
        value="123"
        onButtonPress={() => {}}
        keyboardType="number-pad"
        onChangeText={() => {}}
      />
      <Input
        buttonText="GBP"
        value="123"
        onButtonPress={() => {}}
        keyboardType="number-pad"
        onChangeText={() => {}}
      />
    </View>
  );
};

export { Home };
