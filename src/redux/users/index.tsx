import { Action } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { USERS_LIST, UsersActionTypes, UsersState } from './types'
import {fetchData} from './api';
import createError from '../../utils/createError';

import { AppState } from '../'

export const updateData = (): ThunkAction<void, AppState, null, Action<string>> => async dispatch => {

  try {
    dispatch({type: USERS_LIST.LOADING});
    const users = await fetchData();
    dispatch({type: USERS_LIST.SUCCESS, users});
  } catch (error) {
    dispatch({type: USERS_LIST.FAIL});
    throw createError(error, {
      error: 'Unable to fetch data, please try again later.',
    });
  }
}

let initialState: UsersState = {
  users: [],
  isDataLoading: false,
};

export default (state = initialState, action: UsersActionTypes) => {
  switch (action.type) {
    case USERS_LIST.LOADING:
      return {
        ...state,
        isDataLoading: true,
      };
    case USERS_LIST.SUCCESS:
      const {users} = action;
      return {
        ...state,
        isDataLoading: false,
        users,
      };
    case USERS_LIST.FAIL:
      return {
        ...state,
        isDataLoading: false,
      };
    default:
      return state;
  }
};
