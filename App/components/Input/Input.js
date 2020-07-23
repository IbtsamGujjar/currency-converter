import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  TouchableOpacity,
  Text,
  TextInput,
  StyleSheet,
} from 'react-native';

import { Colors } from '../../../constants/colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    marginVertical: 10,
    marginHorizontal: 20,
    flexDirection: 'row',
    borderRadius: 5,
  },
  button: {
    padding: 15,
    borderRightColor: Colors.border,
    borderRightWidth: 1,
    backgroundColor: Colors.white,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    color: Colors.grey,
    fontWeight: 'bold',
  },
  input: {
    flex: 1,
    padding: 10,
    fontSize: 16,
    color: Colors.textLight,
  },
});

export const Input = ({
  value,
  buttonText,
  keyboardType,
  onPress,
  onChangeText,
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>{buttonText}</Text>
      </TouchableOpacity>
      <TextInput
        style={styles.input}
        keyboardType={keyboardType}
        onChangeText={onChangeText}
        value={value}
      />
    </View>
  );
};

Input.defaultProps = {
  value: '',
  buttonText: 'USD',
  keyboardType: 'number-pad',
  onPress: () => {},
  onChangeText: () => {},
};

Input.propTypes = {
  value: PropTypes.string,
  keyboardType: PropTypes.string,
  buttonText: PropTypes.string,
  onPress: PropTypes.func,
  onChangeText: PropTypes.func,
};
