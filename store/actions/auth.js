import AsyncStorage from '@react-native-community/async-storage';

import {
  LOGIN_START,
  DID_TRY_AUTO_LOGIN,
  LOGOUT,
} from '../../constants/actionTypes';

export const login = (email, password) => ({
  type: LOGIN_START,
  payload: {
    email,
    password,
  },
});

export const didTryAL = () => {
  return { type: DID_TRY_AUTO_LOGIN };
};

export const logout = () => {
  AsyncStorage.removeItem('userData');
  return { type: LOGOUT };
};
