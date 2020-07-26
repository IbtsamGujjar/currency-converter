import React, { useEffect } from 'react';
import {
  View,
  ActivityIndicator,
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import { useDispatch } from 'react-redux';

import { Colors } from '../../constants/colors';
import { LOGIN_SUCCESS } from '../../constants/actionTypes';
import { didTryAL } from '../../store/actions/auth';

const background = require('../../assets/images/background.png');
const logo = require('../../assets/images/logo.png');

const screen = Dimensions.get('window');

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.grey,
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

const SplashScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const tryLogin = async () => {
      const userData = await AsyncStorage.getItem('userData');
      if (!userData) {
        // navigation.navigate('Auth');
        dispatch(didTryAL());
        return;
      }
      const transformedData = JSON.parse(userData);
      const { userEmail } = transformedData;

      // props.navigation.navigate('Home');
      dispatch({
        type: LOGIN_SUCCESS,
        payload: { email: userEmail },
      });
    };

    tryLogin();
  }, [dispatch]);

  return (
    <View style={styles.screen}>
      <View style={styles.logoContainer}>
        <Image
          source={background}
          style={styles.logoBackground}
          resizeMode="contain"
        />
        <Image
          source={logo}
          style={[styles.logo, { tintColor: Colors.grey }]}
          resizeMode="contain"
        />
      </View>
      <ActivityIndicator size="large" color={Colors.white} />
    </View>
  );
};

export { SplashScreen };
