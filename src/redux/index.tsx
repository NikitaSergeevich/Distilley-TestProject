import {combineReducers} from 'redux';

import users from './users';
import theme from './theme';

export const rootReducer = combineReducers({
  users,
  theme,
});

export type AppState = ReturnType<typeof rootReducer>