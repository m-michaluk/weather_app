import {SET_GIF_URL, START_POLLING_GIFS} from "./const";

export const setGifUrl = (url) => ({
    type: SET_GIF_URL,
    url
})

export const startPollingGifs = (conditions) => ({
    type: START_POLLING_GIFS,
    conditions
})