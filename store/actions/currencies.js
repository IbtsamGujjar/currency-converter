import {
  GET_INITIAL_CONVERSION_START,
  SWAP_CURRENCY_START,
  CHANGE_BASE_CURRENCY_START,
  CHANGE_QUOTE_CURRENCY,
} from '../../constants/actionTypes';

export const getInitialConversion = (baseCurrency) => {
  return {
    type: GET_INITIAL_CONVERSION_START,
    payload: {
      baseCurrency,
    },
  };
};

export const swapCurrencies = (baseCurrency, quoteCurrency) => {
  return {
    type: SWAP_CURRENCY_START,
    payload: {
      baseCurrency,
      quoteCurrency,
    },
  };
};

export const changeBaseCurrency = (baseCurrency) => {
  return {
    type: CHANGE_BASE_CURRENCY_START,
    payload: {
      baseCurrency,
    },
  };
};

export const changeQuoteCurrency = (quoteCurrency) => {
  return {
    type: CHANGE_QUOTE_CURRENCY,
    payload: {
      quoteCurrency,
    },
  };
};
