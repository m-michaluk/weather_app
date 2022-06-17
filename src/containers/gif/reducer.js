import {fromJS} from 'immutable';
import {SET_GIF_URL, START_POLLING_GIFS} from "./const";

export const GIF_REDUCER_NAME = 'gif';

const initialState = fromJS({
    conditionToUrls: null,
});

export const gifReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_GIF_URL:
            const {url} = action;
            return state.set('conditionToUrls', new Map(Object.entries(url)));
        case START_POLLING_GIFS:
            return state.set('conditionToUrls', null);
        default:
            return state;
    }
};
