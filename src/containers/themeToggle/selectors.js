import {createSelector} from 'reselect';
import {prop} from 'ramda';

import {THEME_TOGGLE_REDUCER_NAME} from "./reducer";

const getThemeReducerState = prop(THEME_TOGGLE_REDUCER_NAME);

export const themeSelector = createSelector(
    getThemeReducerState,
    (theme) => theme.get('theme')
)

