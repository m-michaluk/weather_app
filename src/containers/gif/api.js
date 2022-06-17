import {get} from 'axios';

const API_URL = 'https://g.tenor.com/v1/search?'

const API_KEY = 'LIVDSRZULELA';

// conditions to słownik <opis warunków pogodowych, liczba gifów potrzebnych dla tych warunków>
// pos to licznik wywołać tej funkcji
export const getGif = async (conditions, pos) => {
    const gifsUrls = {};
    Object.keys(conditions).forEach((key) => gifsUrls[key] = []);
    for (const [key, value] of Object.entries(conditions)) {
        const response = await get(`${API_URL}key=${API_KEY}&q=${key}&limit=${value}&pos=${pos * value}`);
        if (response.data.results.length === 0) throw Error();
        const urls = response.data.results.map((res) => res.media[0].gif.url);
        gifsUrls[key].push(...urls);
    }
    return gifsUrls;
}