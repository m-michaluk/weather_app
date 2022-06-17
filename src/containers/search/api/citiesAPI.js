import {get} from 'axios';
import {API_KEY, API_URL} from "./const";

export const getCitiesSuggestions = async (q) => {
    const response = await get(`${API_URL}search.json?key=${API_KEY}&q=${q}`);
    return response.data;
}