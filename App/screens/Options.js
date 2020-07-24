import React from 'react';
import { SafeAreaView } from 'react-native';
import { Entypo, Ionicons, AntDesign } from '@expo/vector-icons';

import { Divider } from '../components/Divider/Divider';
import { Row } from '../components/Row/Row';

import { APP_CONSTANTS } from '../../constants/constants';
import { openExternalLink } from '../../utils/helpers';

export const Options = () => {
  return (
    <SafeAreaView>
      <Row
        title="Themes"
        icon={<Entypo name="chevron-right" size={20} color="black" />}
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
