import { combineReducers } from 'redux';
import { currenciesReducer } from './currenciesReducer';
import { themeReducer } from './themeReducer';
import { authReducer } from './authReducer';

export const combineReducer = combineReducers({
  currencies: currenciesReducer,
  theme: themeReducer,
  user: authReducer,
});
