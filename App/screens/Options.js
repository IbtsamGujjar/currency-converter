/* eslint-disable react/style-prop-object */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { SafeAreaView } from 'react-native';
import { Entypo, Ionicons, AntDesign } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';

import { Divider } from '../components/Divider/Divider';
import { Row } from '../components/Row/Row';

import { APP_CONSTANTS } from '../../constants/constants';
import { Colors } from '../../constants/colors';
import { openExternalLink } from '../../utils/helpers';

import { logout } from '../../store/actions/auth';

export const OptionsScreen = ({ navigation, themeColor, logout }) => {
  return (
    <SafeAreaView>
      <StatusBar style="dark" backgroundColor={Colors.white} />
      <Row
        title="Themes"
        icon={<Entypo name="chevron-right" size={20} color={themeColor} />}
        onPress={() => navigation.push('Themes')}
      />
      <Divider />
      <Row
        title="Fixer.io"
        icon={<Ionicons name="ios-link" size={20} color={themeColor} />}
        onPress={() => openExternalLink(APP_CONSTANTS.FIXER)}
      />
      <Divider />
      <Row
        title="Logout"
        icon={<AntDesign name="logout" size={20} color={themeColor} />}
        onPress={logout}
      />
      <Divider />
    </SafeAreaView>
  );
};

OptionsScreen.defaultProps = {
  themeColor: Colors.grey,
  navigation: {},
  logout: () => {},
};

OptionsScreen.propTypes = {
  themeColor: PropTypes.string,
  navigation: PropTypes.objectOf(PropTypes.any),
  logout: PropTypes.func,
};

const mapStateToProps = (state) => ({
  themeColor: state.theme.themeColor,
});

const mapDispatchToProps = {
  logout,
};

const Options = connect(mapStateToProps, mapDispatchToProps)(OptionsScreen);

export { Options };
