import { takeLatest } from 'redux-saga/effects';

import {
  GET_INITIAL_CONVERSION_START,
  SWAP_CURRENCY_START,
  CHANGE_BASE_CURRENCY_START,
  LOGIN_START,
} from '../../constants/actionTypes';

import {
  getInitialConversions,
  swapCurrencies,
  changeBaseCurrency,
} from './currenciesSaga';

import { login } from './authSaga';

export function* rootSaga() {
  yield takeLatest(LOGIN_START, login);
  yield takeLatest(GET_INITIAL_CONVERSION_START, getInitialConversions);
  yield takeLatest(SWAP_CURRENCY_START, swapCurrencies);
  yield takeLatest(CHANGE_BASE_CURRENCY_START, changeBaseCurrency);
}
