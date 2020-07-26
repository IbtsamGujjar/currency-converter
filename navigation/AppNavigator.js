import React from 'react';
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';

import { ModalStackScreen, AuthNavigator } from './Navigation';
import { SplashScreen } from '../App/screens/SplashScreen';

export const AppNavigator = () => {
  const isAuth = useSelector((state) => !!state.user.userEmail);
  const didTryAutoLogin = useSelector((state) => state.user.didTryAutoLogin);

  return (
    <NavigationContainer>
      {isAuth && <ModalStackScreen />}
      {!isAuth && didTryAutoLogin && <AuthNavigator />}
      {!isAuth && !didTryAutoLogin && <SplashScreen />}
    </NavigationContainer>
  );
};
