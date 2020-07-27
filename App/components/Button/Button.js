import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Image, StyleSheet, Text } from 'react-native';

import { Colors } from '../../../constants/colors';

const reverseImg = require('../../../assets/images/reverse.png');

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  buttonIcon: {
    marginRight: 10,
    width: 20,
    height: 20,
  },
  buttonText: {
    fontSize: 16,
    color: Colors.white,
  },
});

const Button = ({ btnText, onPress, style }) => {
  return (
    <TouchableOpacity onPress={onPress} style={{ ...styles.button, ...style }}>
      <Image
        source={reverseImg}
        style={styles.buttonIcon}
        resizeMode="contain"
      />
      <Text style={styles.buttonText}>{btnText}</Text>
    </TouchableOpacity>
  );
};

Button.defaultProps = {
  btnText: 'Reverse Currencies',
  style: {},
  onPress: () => {},
};

Button.propTypes = {
  btnText: PropTypes.string,
  style: PropTypes.objectOf(PropTypes.any),
  onPress: PropTypes.func,
};

export { Button };
