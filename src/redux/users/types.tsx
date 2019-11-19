import asyncActionNames from '../../utils/asyncActionNames';

export interface Car {
    name: string,
    year: number,
}

export interface User {
    id: number,
    title: string,
    subtitle: string,
    car: Car
}

export interface UsersState {
    users: User[],
    isDataLoading: boolean,
}

export const USERS_LIST = asyncActionNames('users/LIST');

interface GetUsersListAction {
    type: typeof USERS_LIST.LOADING | typeof USERS_LIST.FAIL | typeof USERS_LIST.SUCCESS
    users: Array<User>
}

export type UsersActionTypes = GetUsersListAction
