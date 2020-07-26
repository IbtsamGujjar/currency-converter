import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Keyboard, View, Dimensions, Platform, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    left: 0,
    right: 0,
    bottom: 0,
  },
});

const KeyboardSpacer = ({
  style,
  onToggle,
  keyboardDidShow,
  keyboardDidHide,
}) => {
  const [keyboardSpace, setKeyboardSpace] = useState(0);

  useEffect(() => {
    const updateKeyboardSpace = (event) => {
      if (!event.endCoordinates) {
        return;
      }

      const screenHeight = Dimensions.get('window').height;
      const newKeyboardSpace = screenHeight - event.endCoordinates.screenY;
      setKeyboardSpace(newKeyboardSpace);
      onToggle(true, newKeyboardSpace);
      keyboardDidShow();
    };
    // prettier-ignore
    const showEvt = Platform.OS === 'android' ? 'keyboardDidShow' : 'keyboardWillShow';
    const showListener = Keyboard.addListener(showEvt, updateKeyboardSpace);

    const resetKeyboardSpace = () => {
      setKeyboardSpace(0);
      onToggle(false, 0);
      keyboardDidHide();
    };
    // prettier-ignore
    const hideEvt = Platform.OS === 'android' ? 'keyboardDidHide' : 'keyboardWillHide';
    const hideListener = Keyboard.addListener(hideEvt, resetKeyboardSpace);

    return () => {
      showListener.remove();
      hideListener.remove();
    };
  }, []);

  return <View style={[styles.container, { height: keyboardSpace }, style]} />;
};

KeyboardSpacer.defaultProps = {
  style: {},
  onToggle: () => {},
  keyboardDidHide: () => {},
  keyboardDidShow: () => {},
};

KeyboardSpacer.propTypes = {
  style: PropTypes.objectOf(PropTypes.any),
  onToggle: PropTypes.func,
  keyboardDidHide: PropTypes.func,
  keyboardDidShow: PropTypes.func,
};

export { KeyboardSpacer };
