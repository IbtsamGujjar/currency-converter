/* eslint-disable react/style-prop-object */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  ScrollView,
  View,
  StyleSheet,
  Button,
  SafeAreaView,
  ActivityIndicator,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { FormInput } from '../components/FormInput/FormInput';

import { Colors } from '../../constants/colors';

import { login } from '../../store/actions/auth';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white,
  },
  gradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  authContainer: {
    width: '80%',
    maxWidth: 400,
    maxHeight: 400,
    padding: 20,
  },
  buttonContainer: {
    marginTop: 10,
  },
});

const LoginScreen = ({ navigation, login, user }) => {
  const [email, setEmail] = useState({ value: '', isValid: false });
  const [password, setPassword] = useState({ value: '', isValid: false });

  const onChangeText = (inputIdentifier, inputValue, inputValidity) => {
    switch (inputIdentifier) {
      case 'email':
        setEmail({ value: inputValue, isValid: inputValidity });
        break;
      case 'password':
        setPassword({ value: inputValue, isValid: inputValidity });
        break;
      default:
        break;
    }
  };
  const handleLogin = () => {
    if (email.isValid && password.isValid) {
      login(email.value, password.value);
    }
  };
  if (user.loggedIn) {
    navigation.navigate('Home');
  }
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <SafeAreaView style={styles.screen}>
        <StatusBar style="dark" backgroundColor={Colors.white} />
        <View style={styles.authContainer}>
          <ScrollView>
            <FormInput
              id="email"
              label="E-Mail"
              initialValue={email.value}
              keyboardType="email-address"
              required
              email
              autoCapitalize="none"
              initiallyValid={email.isValid}
              errorText="Please enter a valid email address."
              onChangeText={onChangeText}
            />
            <FormInput
              id="password"
              label="Password"
              initialValue={password.value}
              secureTextEntry
              keyboardType="default"
              required
              minLength={5}
              initiallyValid={password.isValid}
              autoCapitalize="none"
              errorText="Please enter a valid password."
              onChangeText={onChangeText}
            />
            <View style={styles.buttonContainer}>
              {user.fetching ? (
                <ActivityIndicator size="small" color={Colors.white} />
              ) : (
                <Button
                  title="Login"
                  color={Colors.green}
                  onPress={handleLogin}
                />
              )}
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

LoginScreen.defaultProps = {
  user: {},
  login: () => {},
  navigation: {},
};

LoginScreen.propTypes = {
  user: PropTypes.objectOf(PropTypes.any),
  login: PropTypes.func,
  navigation: PropTypes.objectOf(PropTypes.any),
};

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = {
  login,
};

const Login = connect(mapStateToProps, mapDispatchToProps)(LoginScreen);

export { Login };
