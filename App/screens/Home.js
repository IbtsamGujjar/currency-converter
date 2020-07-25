/* eslint-disable react/style-prop-object */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  Image,
  Dimensions,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import moment from 'moment';

import { Input } from '../components/Input/Input';
import { Colors } from '../../constants/colors';
import { Button } from '../components/Button/Button';
import { KeyboardSpacer } from '../components/KeyboardSpacer/KeyboardSpacer';

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
  headerText: {
    color: Colors.white,
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 20,
  },
  resultText: {
    fontSize: 14,
    color: Colors.white,
    textAlign: 'center',
  },
  inputContainer: {
    marginBottom: 10,
  },
  content: {
    paddingTop: screen.height * 0.1,
  },
  header: {
    alignItems: 'flex-end',
    marginHorizontal: 20,
    marginTop: 20,
  },
});

const Home = ({ navigation }) => {
  const baseCurrency = 'USD';
  const quoteCurrency = 'GBP';
  const conversionRate = 0.89824;
  const date = '2020-04-13';

  const [value, setValue] = useState('100');
  const [scrollEnabled, setScrollEnabled] = useState(false);

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: Colors.grey }]}
      scrollEnabled={scrollEnabled}
    >
      <StatusBar style="light-content" backgroundColor={Colors.grey} />
      <SafeAreaView scrollEnabled={scrollEnabled}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.push('Options')}>
            <Entypo name="cog" size={32} color={Colors.white} />
          </TouchableOpacity>
        </View>
        <View style={styles.content}>
          <View style={styles.logoContainer}>
            <Image
              source={background}
              style={styles.logoBackground}
              resizeMode="contain"
            />
            <Image source={logo} style={styles.logo} resizeMode="contain" />
          </View>
          <Text style={styles.headerText}>Currency Converter</Text>
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
                value && `${(parseFloat(value) * conversionRate).toFixed(2)}`
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
            {`1 ${baseCurrency} = ${conversionRate} ${quoteCurrency} as of ${moment(
              date,
              'YYYY-MM-DD'
            ).format('MMM D, YYYY')}`}
          </Text>
          <Button text="Reverse Currencies" onPress={() => {}} />
        </View>
      </SafeAreaView>
      <KeyboardSpacer onToggle={(visible) => setScrollEnabled(visible)} />
    </ScrollView>
  );
};

Home.defaultProps = {
  navigation: {},
};

Home.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any),
};

export { Home };
