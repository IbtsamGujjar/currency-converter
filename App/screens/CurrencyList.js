import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { StatusBar, FlatList, View, StyleSheet } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { useSafeArea } from 'react-native-safe-area-context';

import currenciesList from '../../data/currencies.json';
import { Row } from '../components/Row/Row';
import { Divider } from '../components/Divider/Divider';
import { Colors } from '../../constants/colors';

import {
  changeBaseCurrency,
  changeQuoteCurrency,
} from '../../store/actions/currencies';

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

const CurrencyListScreen = ({
  navigation,
  route,
  currencies,
  changeBaseCurrency,
  changeQuoteCurrency,
  themeColor,
}) => {
  const insets = useSafeArea();

  const { baseCurrency, quoteCurrency } = currencies;

  const params = route.params || {};
  const { isBase = true } = params;

  return (
    <View style={{ ...styles.screen, paddingBottom: insets.bottom }}>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.white} />
      <FlatList
        data={currenciesList}
        renderItem={({ item }) => {
          let selected = false;
          if (isBase && item === baseCurrency) {
            selected = true;
          } else if (!isBase && item === quoteCurrency) {
            selected = true;
          }
          return (
            <Row
              title={item}
              onPress={() => {
                if (isBase) {
                  changeBaseCurrency(item);
                } else {
                  changeQuoteCurrency(item);
                }
                navigation.pop();
              }}
              icon={
                selected ? (
                  <View style={[styles.icon, { backgroundColor: themeColor }]}>
                    <Entypo name="check" size={20} color={Colors.white} />
                  </View>
                ) : null
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

CurrencyListScreen.defaultProps = {
  themeColor: Colors.grey,
  currencies: {},
  navigation: {},
  route: {},
  changeBaseCurrency: () => {},
  changeQuoteCurrency: () => {},
};

CurrencyListScreen.propTypes = {
  themeColor: PropTypes.string,
  currencies: PropTypes.objectOf(PropTypes.any),
  navigation: PropTypes.objectOf(PropTypes.any),
  route: PropTypes.objectOf(PropTypes.any),
  changeBaseCurrency: PropTypes.func,
  changeQuoteCurrency: PropTypes.func,
};

const mapStateToProps = (state) => ({
  currencies: state.currencies,
  themeColor: state.theme.themeColor,
});

const mapDispatchToProps = {
  changeBaseCurrency,
  changeQuoteCurrency,
};

const CurrencyList = connect(
  mapStateToProps,
  mapDispatchToProps
)(CurrencyListScreen);

export { CurrencyList };
