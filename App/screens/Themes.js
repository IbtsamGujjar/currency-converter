import React from 'react';
import PropTypes from 'prop-types';
import { StatusBar, ScrollView, View, StyleSheet } from 'react-native';

import { Row } from '../components/Row/Row';
import { Divider } from '../components/Divider/Divider';

import { Colors } from '../../constants/colors';
import themes from '../../data/themes.json';

const styles = StyleSheet.create({
  icon: {
    width: 30,
    height: 30,
    borderRadius: 20,
  },
});

const Themes = ({ navigation }) => {
  const onPress = (color) => {
    console.log('COLOR', color);
    navigation.popToTop();
  };
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.white} />
      <ScrollView>
        {themes.map((theme) => {
          return (
            <React.Fragment key={theme.value}>
              <Row
                title={theme.name}
                onPress={() => onPress(Colors[theme.value])}
                icon={
                  // prettier-ignore
                  <View style={[styles.icon, { backgroundColor: Colors[theme.value] }]} />
                }
              />
              <Divider />
            </React.Fragment>
          );
        })}
      </ScrollView>
    </>
  );
};

Themes.defaultProps = {
  navigation: {},
};

Themes.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any),
};

export { Themes };
