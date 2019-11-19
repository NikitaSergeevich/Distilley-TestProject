// import asyncActionNames from '../../utils/asyncActionNames';

// export interface Car {
//     name: string,
//     year: number,
// }

// export interface User {
//     id: number,
//     title: string,
//     subtitle: string,
//     car: Car
// }

export interface ThemeState {
    color: string,
}

export const THEME_TOGGLE = 'theme/TOGGLE';

interface ThemeAction {
    type: typeof THEME_TOGGLE
}

export type ThemeActionTypes = ThemeAction
