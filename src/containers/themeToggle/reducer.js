import {fromJS} from 'immutable';
import {DARK_THEME, LIGHT_THEME, TOGGLE_THEME} from "./const";

export const THEME_TOGGLE_REDUCER_NAME = 'theme'

const initialState = fromJS({
    theme: LIGHT_THEME,
});

export const themeReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_THEME:
            return state.set('theme', state.get('theme') === LIGHT_THEME ? DARK_THEME : LIGHT_THEME);
        default:
            return state;
    }
}