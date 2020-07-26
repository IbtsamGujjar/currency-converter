/* eslint-disable react/style-prop-object */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  Dimensions,
  SafeAreaView,
  TouchableOpacity,
  ActivityIndicator,
  Animated,
} from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import moment from 'moment';

import { Input } from '../components/Input/Input';
import { Colors } from '../../constants/colors';
import { Button } from '../components/Button/Button';
import { KeyboardSpacer } from '../components/KeyboardSpacer/KeyboardSpacer';

import {
  getInitialConversion,
  swapCurrencies,
} from '../../store/actions/currencies';

const background = require('../../assets/images/background.png');
const logo = require('../../assets/images/logo.png');

const screen = Dimensions.get('window');
const imageWidth = screen.width / 2;

const smallContainerSize = imageWidth / 2;
const smallImageSize = imageWidth / 4;

const largeContainerSize = imageWidth;
const largeImageSize = imageWidth / 2;

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
    position: 'relative',
    width: largeContainerSize,
    height: largeContainerSize,
  },
  logo: {
    position: 'absolute',
    width: largeImageSize,
    height: largeImageSize,
  },
  headerText: {
    color: Colors.white,
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 20,
    // Custom Font
    fontFamily: 'open-sans-bold',
  },
  resultText: {
    fontSize: 14,
    color: Colors.white,
    textAlign: 'center',
  },
  inputContainer: {
    marginBottom: 10,
  },
  header: {
    alignItems: 'flex-end',
    marginHorizontal: 20,
    marginTop: screen.height * 0.05,
  },
});

const HomeScreen = ({
  navigation,
  getInitialConversion,
  themeColor,
  currencies,
  swapCurrencies,
}) => {
  const {
    baseCurrency,
    quoteCurrency,
    rates,
    date = moment().format('YYYY-MM-DD'),
    fetching,
  } = currencies;
  const conversionRate = (rates && rates[quoteCurrency]) || 1;
  const [value, setValue] = useState('100');
  const [scrollEnabled, setScrollEnabled] = useState(false);

  const [containerImageWidth] = useState(
    new Animated.Value(largeContainerSize)
  );
  const [imageWidth] = useState(new Animated.Value(largeImageSize));

  const keyboardDidShow = () => {
    Animated.parallel([
      Animated.timing(containerImageWidth, {
        toValue: smallContainerSize,
        duration: 250,
        useNativeDriver: false,
      }),
      Animated.timing(imageWidth, {
        toValue: smallImageSize,
        duration: 250,
        useNativeDriver: false,
      }),
    ]).start();
  };

  const keyboardDidHide = () => {
    Animated.parallel([
      Animated.timing(containerImageWidth, {
        toValue: largeContainerSize,
        duration: 250,
        useNativeDriver: false,
      }),
      Animated.timing(imageWidth, {
        toValue: largeImageSize,
        duration: 250,
        useNativeDriver: false,
      }),
    ]).start();
  };

  useEffect(() => {
    getInitialConversion(baseCurrency);
  }, []);

  const logoContainerStyles = [
    styles.logoContainer,
    { width: containerImageWidth, height: containerImageWidth },
  ];
  const logoStyles = [
    styles.logo,
    { width: imageWidth },
    { tintColor: themeColor },
  ];

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: themeColor }]}
      scrollEnabled={scrollEnabled}
    >
      <StatusBar style="light-content" backgroundColor={themeColor} />
      <SafeAreaView scrollEnabled={scrollEnabled}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.push('Options')}>
            <Entypo name="cog" size={32} color={Colors.white} />
          </TouchableOpacity>
        </View>
        <View>
          <Animated.View style={styles.logoContainer}>
            <Animated.Image
              source={background}
              style={logoContainerStyles}
              resizeMode="contain"
            />
            <Animated.Image
              source={logo}
              style={logoStyles}
              resizeMode="contain"
            />
          </Animated.View>
          <Text style={styles.headerText}>Currency Converter</Text>
          {fetching ? (
            <ActivityIndicator color={Colors.white} size="large" />
          ) : (
            <>
              <View style={styles.inputContainer}>
                <Input
                  buttonText={baseCurrency}
                  value={value}
                  onPress={() => {
                    navigation.push('CurrencyList', {
                      title: 'Base Currency',
                      isBase: true,
                    });
                  }}
                  keyboardType="number-pad"
                  onChangeText={(text) => {
                    if (text.length === 0) {
                      setValue();
                    } else {
                      setValue(text);
                    }
                  }}
                />
                <Input
                  buttonText={quoteCurrency}
                  value={
                    value &&
                    `${(parseFloat(value) * conversionRate).toFixed(2)}`
                  }
                  editable={false}
                  onPress={() => {
                    navigation.push('CurrencyList', {
                      title: 'Quote Currency',
                      isBase: false,
                    });
                  }}
                />
              </View>
              <Text style={styles.resultText}>
                {`1 ${baseCurrency} = ${conversionRate} ${quoteCurrency} as of ${
                  date && moment(date, 'YYYY-MM-DD').format('MMM D, YYYY')
                }`}
              </Text>
              <Button
                text="Reverse Currencies"
                onPress={() => swapCurrencies(quoteCurrency, baseCurrency)}
              />
            </>
          )}
        </View>
      </SafeAreaView>
      <KeyboardSpacer
        onToggle={(visible) => setScrollEnabled(visible)}
        keyboardDidShow={keyboardDidShow}
        keyboardDidHide={keyboardDidHide}
      />
    </ScrollView>
  );
};

HomeScreen.defaultProps = {
  themeColor: Colors.grey,
  currencies: {},
  navigation: {},
  getInitialConversion: () => {},
  swapCurrencies: () => {},
};

HomeScreen.propTypes = {
  themeColor: PropTypes.string,
  currencies: PropTypes.objectOf(PropTypes.any),
  navigation: PropTypes.objectOf(PropTypes.any),
  getInitialConversion: PropTypes.func,
  swapCurrencies: PropTypes.func,
};

const mapStateToProps = (state) => ({
  currencies: state.currencies,
  themeColor: state.theme.themeColor,
});

const mapDispatchToProps = {
  getInitialConversion,
  swapCurrencies,
};

const Home = connect(mapStateToProps, mapDispatchToProps)(HomeScreen);

export { Home };
