import { runSaga } from 'redux-saga';
import * as api from '../services/currencies';
import { getInitialConversions } from '../sagas/currenciesSaga';
import { GET_INITIAL_CONVERSION_SUCCESS } from '../../constants/actionTypes';

const mockedData = {
  base: 'USD',
  date: '2018-09-06',
  rates: {
    AUD: 1.3894,
    BGN: 1.6811,
    BRL: 4.1188,
    CAD: 1.3184,
  },
};
test('should load and handle images in case of success', async () => {
  const dispatchedActions = [];

  api.getLastestRates = jest.fn(() => Promise.resolve(mockedData));

  const fakeStore = {
    getState: () => ({ nextPage: 1 }),
    dispatch: (action) => dispatchedActions.push(action),
  };

  await runSaga(fakeStore, getInitialConversions, {
    payload: { baseCurrency: 'USD' },
  }).done;
  expect(api.getLastestRates.mock.calls.length).toBe(1);
  expect(dispatchedActions).toContainEqual({
    type: GET_INITIAL_CONVERSION_SUCCESS,
    payload: mockedData,
  });
});
