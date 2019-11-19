import { THEME_TOGGLE, ThemeActionTypes, ThemeState } from './types'

export function toggleTheme(): ThemeActionTypes {
  return {
    type: THEME_TOGGLE,
  }
}

let initialState: ThemeState = {
  color: `light`,
};

export default (state = initialState, action: ThemeActionTypes) => {
  switch (action.type) {
    case THEME_TOGGLE:
      return {
        ...state,
        color: state.color === 'light' ? 'dark' : 'light'
      };
    default:
      return state;
  }
};
