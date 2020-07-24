import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

import { Colors } from '../../../constants/colors';

const styles = StyleSheet.create({
  row: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: Colors.white,
  },
  title: {
    color: Colors.text,
    fontSize: 16,
  },
  separator: {
    backgroundColor: Colors.border,
    height: StyleSheet.hairlineWidth,
    marginLeft: 20,
  },
});

export const Row = ({ title, icon, onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.row}>
    <Text style={styles.title}>{title}</Text>
    {icon}
  </TouchableOpacity>
);

Row.defaultProps = {
  title: '',
  icon: null,
  onPress: () => {},
};

Row.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.element,
  onPress: PropTypes.func,
};
