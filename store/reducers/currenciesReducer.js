import {
  GET_INITIAL_CONVERSION_START,
  GET_INITIAL_CONVERSION_SUCCESS,
  GET_INITIAL_CONVERSION_FAILURE,
  SWAP_CURRENCY_START,
  SWAP_CURRENCY_SUCCESS,
  SWAP_CURRENCY_FAILURE,
  CHANGE_BASE_CURRENCY_START,
  CHANGE_BASE_CURRENCY_SUCCESS,
  CHANGE_BASE_CURRENCY_FAILURE,
  CHANGE_QUOTE_CURRENCY,
} from '../../constants/actionTypes';

const initialState = {
  baseCurrency: 'USD',
  quoteCurrency: 'GBP',
  rates: {},
  date: '',
  fetching: false,
  error: false,
  successMessage: '',
  errorMessage: '',
};

export const currenciesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_INITIAL_CONVERSION_START:
      return {
        ...state,
        fetching: true,
      };
    case GET_INITIAL_CONVERSION_SUCCESS:
      return {
        ...state,
        rates: action.payload.rates,
        date: action.payload.date,
        fetching: false,
        error: false,
      };
    case GET_INITIAL_CONVERSION_FAILURE:
      return {
        ...state,
        fetching: false,
        error: true,
      };
    case SWAP_CURRENCY_START:
      return {
        ...state,
        fetching: true,
      };
    case SWAP_CURRENCY_SUCCESS:
      return {
        ...state,
        baseCurrency: action.payload.baseCurrency,
        quoteCurrency: action.payload.quoteCurrency,
        rates: action.payload.rates,
        date: action.payload.date,
        fetching: false,
        error: false,
      };
    case SWAP_CURRENCY_FAILURE:
      return {
        ...state,
        fetching: false,
        error: true,
      };
    case CHANGE_BASE_CURRENCY_START:
      return {
        ...state,
        fetching: true,
      };
    case CHANGE_BASE_CURRENCY_SUCCESS:
      return {
        ...state,
        baseCurrency: action.payload.baseCurrency,
        rates: action.payload.rates,
        date: action.payload.date,
        fetching: false,
        error: false,
      };
    case CHANGE_BASE_CURRENCY_FAILURE:
      return {
        ...state,
        fetching: false,
        error: true,
      };
    case CHANGE_QUOTE_CURRENCY:
      return {
        ...state,
        quoteCurrency: action.payload.quoteCurrency,
      };
    default:
      return state;
  }
};
