import { call, put } from 'redux-saga/effects';

import { getLastestRates } from '../services/currencies';

import {
  GET_INITIAL_CONVERSION_SUCCESS,
  GET_INITIAL_CONVERSION_FAILURE,
  SWAP_CURRENCY_SUCCESS,
  SWAP_CURRENCY_FAILURE,
  CHANGE_BASE_CURRENCY_SUCCESS,
  CHANGE_BASE_CURRENCY_FAILURE,
} from '../../constants/actionTypes';

export function* getInitialConversions(action) {
  try {
    const data = action.payload.baseCurrency;
    const res = yield call(getLastestRates, data);
    yield put({ type: GET_INITIAL_CONVERSION_SUCCESS, payload: res });
  } catch (err) {
    yield put({
      type: GET_INITIAL_CONVERSION_FAILURE,
      payload: { error: err },
    });
  }
}

export function* swapCurrencies(action) {
  try {
    const data = action.payload.baseCurrency;
    const res = yield call(getLastestRates, data);
    yield put({
      type: SWAP_CURRENCY_SUCCESS,
      payload: {
        ...res,
        baseCurrency: action.payload.baseCurrency,
        quoteCurrency: action.payload.quoteCurrency,
      },
    });
  } catch (err) {
    yield put({
      type: SWAP_CURRENCY_FAILURE,
      payload: { error: err },
    });
  }
}

export function* changeBaseCurrency(action) {
  try {
    const data = action.payload.baseCurrency;
    const res = yield call(getLastestRates, data);
    yield put({
      type: CHANGE_BASE_CURRENCY_SUCCESS,
      payload: { ...res, baseCurrency: action.payload.baseCurrency },
    });
  } catch (err) {
    yield put({
      type: CHANGE_BASE_CURRENCY_FAILURE,
      payload: { error: err },
    });
  }
}
