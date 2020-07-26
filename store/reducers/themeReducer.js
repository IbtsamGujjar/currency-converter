import { CHANGE_THEME_COLOR } from '../../constants/actionTypes';
import { Colors } from '../../constants/colors';

const initialState = {
  themeColor: Colors.grey,
};

export const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_THEME_COLOR:
      return { ...state, themeColor: action.color };
    default:
      return state;
  }
};
