import React from 'react';
import PropTypes from 'prop-types';
import { StatusBar, FlatList, View, StyleSheet } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { useSafeArea } from 'react-native-safe-area-context';

import currencies from '../../data/currencies.json';
import { Row } from '../components/Row/Row';
import { Divider } from '../components/Divider/Divider';
import { Colors } from '../../constants/colors';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  icon: {
    width: 30,
    height: 30,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const CurrencyList = ({ navigation, route }) => {
  const insets = useSafeArea();

  const params = route.params || {};
  const { isBase = true } = params;
  console.log(isBase, 'BASE');

  return (
    <View style={{ ...styles.screen, paddingBottom: insets.bottom }}>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.white} />
      <FlatList
        data={currencies}
        renderItem={({ item }) => {
          const selected = true;
          return (
            <Row
              title={item}
              onPress={() => {
                navigation.pop();
              }}
              icon={
                selected && (
                  <View style={[styles.icon, { backgroundColor: Colors.grey }]}>
                    <Entypo name="check" size={20} color={Colors.white} />
                  </View>
                )
              }
            />
          );
        }}
        keyExtractor={(item) => item}
        ItemSeparatorComponent={() => <Divider />}
      />
    </View>
  );
};

CurrencyList.defaultProps = {
  navigation: {},
  route: {},
};

CurrencyList.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any),
  route: PropTypes.objectOf(PropTypes.any),
};

export { CurrencyList };
