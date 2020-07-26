import { call, put } from 'redux-saga/effects';

import { LOGIN_SUCCESS, LOGIN_FAILURE } from '../../constants/actionTypes';

import { loginUser } from '../services/auth';
import { saveDataToStorage } from '../../utils/helpers';

export function* login(action) {
  try {
    const data = action.payload.email;
    const res = yield call(loginUser, data);
    saveDataToStorage(res);
    yield put({
      type: LOGIN_SUCCESS,
      payload: { email: res },
    });
  } catch (err) {
    yield put({
      type: LOGIN_FAILURE,
      payload: { error: err },
    });
  }
}
