/* eslint-disable react/style-prop-object */
import React from 'react';
import PropTypes from 'prop-types';
import { SafeAreaView } from 'react-native';
import { Entypo, Ionicons, AntDesign } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';

import { Divider } from '../components/Divider/Divider';
import { Row } from '../components/Row/Row';

import { APP_CONSTANTS } from '../../constants/constants';
import { Colors } from '../../constants/colors';
import { openExternalLink } from '../../utils/helpers';

export const Options = ({ navigation }) => {
  return (
    <SafeAreaView>
      <StatusBar style="dark" backgroundColor={Colors.white} />
      <Row
        title="Themes"
        icon={<Entypo name="chevron-right" size={20} color="black" />}
        onPress={() => navigation.push('Themes')}
      />
      <Divider />
      <Row
        title="Fixer.io"
        icon={<Ionicons name="ios-link" size={20} color="black" />}
        onPress={() => openExternalLink(APP_CONSTANTS.FIXER)}
      />
      <Divider />
      <Row
        title="Logout"
        icon={<AntDesign name="logout" size={20} color="black" />}
      />
      <Divider />
    </SafeAreaView>
  );
};

Options.defaultProps = {
  navigation: {},
};

Options.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any),
};
