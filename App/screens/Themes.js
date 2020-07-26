import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { StatusBar, ScrollView } from 'react-native';
import styled from 'styled-components/native';

import { Row } from '../components/Row/Row';
import { Divider } from '../components/Divider/Divider';

import { Colors } from '../../constants/colors';
import themes from '../../data/themes.json';

import { changeThemeColor } from '../../store/actions/theme';

const Icon = styled.View`
  width: 30px;
  height: 30px;
  border-radius: 20px;
  background-color: ${(props) => props.bgColor || Colors.grey};
`;

const ThemesScreen = ({ navigation, changeThemeColor }) => {
  const onPress = (color) => {
    changeThemeColor(color);
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
                icon={<Icon bgColor={Colors[theme.value]} />}
              />
              <Divider />
            </React.Fragment>
          );
        })}
      </ScrollView>
    </>
  );
};

ThemesScreen.defaultProps = {
  changeThemeColor: () => {},
  navigation: {},
};

ThemesScreen.propTypes = {
  changeThemeColor: PropTypes.func,
  navigation: PropTypes.objectOf(PropTypes.any),
};

const mapDispatchToProps = {
  changeThemeColor,
};

const Themes = connect(null, mapDispatchToProps)(ThemesScreen);

export { Themes };
