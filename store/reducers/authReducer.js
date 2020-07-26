import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
  DID_TRY_AUTO_LOGIN,
} from '../../constants/actionTypes';

const initialState = {
  userEmail: null,
  loggedIn: false,
  didTryAutoLogin: false,
  fetching: false,
  error: false,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        fetching: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        userEmail: action.payload.email,
        didTryAutoLogin: true,
        loggedIn: true,
        fetching: false,
        error: false,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        fetching: false,
        loggedIn: false,
        error: true,
      };
    case DID_TRY_AUTO_LOGIN:
      return {
        ...state,
        didTryAutoLogin: true,
      };
    case LOGOUT:
      return {
        ...initialState,
        didTryAutoLogin: true,
      };
    default:
      return state;
  }
};
