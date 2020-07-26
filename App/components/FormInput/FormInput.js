import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  formControl: {
    flex: 1,
  },
  label: {
    fontFamily: 'open-sans-bold',
    marginVertical: 8,
  },
  input: {
    paddingHorizontal: 2,
    paddingVertical: 5,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  errorContainer: {
    marginVertical: 5,
  },
  errorText: {
    fontFamily: 'open-sans',
    color: 'red',
    fontSize: 13,
  },
});

const FormInput = ({
  label,
  keyboardType,
  secureTextEntry,
  onChangeText,
  initialValue,
  required,
  email,
  autoCapitalize,
  errorText,
  minLength,
  initiallyValid,
  id,
}) => {
  const [inputState, setInputState] = useState({
    value: initialValue,
    isValid: initiallyValid,
    touched: false,
  });

  useEffect(() => {
    if (inputState.touched) {
      onChangeText(id, inputState.value, inputState.isValid);
    }
  }, [inputState]);

  const handleInputChange = (text) => {
    // eslint-disable-next-line no-useless-escape
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let isValid = true;
    if (required && text.trim().length === 0) {
      isValid = false;
    }
    if (email && !emailRegex.test(text.toLowerCase())) {
      isValid = false;
    }
    if (minLength != null && text.length < minLength) {
      isValid = false;
    }
    setInputState({ ...inputState, value: text, isValid });
  };
  const lostFocusHandler = () => {
    setInputState({ ...inputState, touched: true });
  };
  return (
    <View style={styles.formControl}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        value={inputState.value}
        autoCapitalize={autoCapitalize}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
        onChangeText={handleInputChange}
        onBlur={lostFocusHandler}
      />
      {!inputState.isValid && inputState.touched && (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>{errorText}</Text>
        </View>
      )}
    </View>
  );
};

FormInput.defaultProps = {
  label: '',
  initialValue: '',
  required: true,
  email: false,
  autoCapitalize: 'none',
  errorText: '',
  minLength: 5,
  initiallyValid: false,
  id: '',
  keyboardType: 'default',
  secureTextEntry: false,
  onChangeText: () => {},
};

FormInput.propTypes = {
  required: PropTypes.bool,
  email: PropTypes.bool,
  autoCapitalize: PropTypes.string,
  errorText: PropTypes.string,
  minLength: PropTypes.number,
  initiallyValid: PropTypes.bool,
  id: PropTypes.string,
  label: PropTypes.string,
  initialValue: PropTypes.string,
  keyboardType: PropTypes.string,
  secureTextEntry: PropTypes.bool,
  onChangeText: PropTypes.func,
};

export { FormInput };
