import { CHANGE_THEME_COLOR } from '../../constants/actionTypes';

export const changeThemeColor = (color) => ({
  type: CHANGE_THEME_COLOR,
  color,
});
