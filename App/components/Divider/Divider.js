import React from 'react';
import PropTypes from 'prop-types';

import { View, StyleSheet } from 'react-native';

import { Colors } from '../../../constants/colors';

const styles = StyleSheet.create({
  divider: {
    backgroundColor: Colors.border,
    height: StyleSheet.hairlineWidth,
  },
});

export const Divider = ({ style }) => {
  return <View style={{ ...styles.divider, ...style }} />;
};

Divider.defaultProps = {
  style: {},
};

Divider.propTypes = {
  style: PropTypes.objectOf(PropTypes.any),
};
