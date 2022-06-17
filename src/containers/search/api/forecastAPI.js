import {get} from 'axios';
import {FORECAST_TYPES} from "../const";
import {API_KEY, API_URL} from "./const";

export const getForecast = async (args) => {
    switch (args.forecastType) {
        case FORECAST_TYPES.DAILY:
            return getForecastDaily(args.q, 3);
        case FORECAST_TYPES.HOURLY:
            return getForecastHourly(args.q);
        case FORECAST_TYPES.LIVE:
            return getForecastRealTime(args.q);
        default:
            return null;
    }
}

const getForecastRealTime = async (q) => {
    const response = await get(`${API_URL}current.json?key=${API_KEY}&q=${q}`);
    let forecast = response.data;
    return {
        forecastType: FORECAST_TYPES.LIVE,
        location: getLocation(forecast),
        forecast: {
            lastUpdated: forecast.current.last_updated,
            temp: forecast.current.temp_c,
            wind: forecast.current.wind_kph,
            humidity: forecast.current.humidity,
            cloud: forecast.current.cloud,
            condition: {
                text: forecast.current.condition.text,
                icon: forecast.current.condition.icon,
            }
        }
    }
}

const getForecastDaily = async (q, days = 1) => {
    const response = await get(`${API_URL}forecast.json?key=${API_KEY}&q=${q}&days=${days}`);
    const forecast = response.data;
    return {
        forecastType: FORECAST_TYPES.DAILY,
        location: getLocation(forecast),
        forecast: forecast.forecast.forecastday.map((forecastday) => getDaySummary(forecastday))
    }
}

const getForecastHourly = async (q) => {
    const response = await get(`${API_URL}forecast.json?key=${API_KEY}&q=${q}&days=1`);
    const forecast = response.data;
    return {
        forecastType: FORECAST_TYPES.HOURLY,
        day: getDaySummary(forecast.forecast.forecastday[0]),
        location: getLocation(forecast),
        forecast: forecast.forecast.forecastday[0].hour.map((forecast) => ({
            time: forecast.time.substring(forecast.time.indexOf(" ")),
            temp: forecast.temp_c,
            wind: forecast.wind_kph,
            humidity: forecast.humidity,
            cloud: forecast.cloud,
            condition: {
                text: forecast.condition.text,
                icon: forecast.condition.icon,
            }
        }))
    }
}

const getLocation = (forecast) => ({
    name: forecast.location.name,
    country: forecast.location.country,
    localtime: forecast.location.localtime,
})

const getDaySummary = (forecastday) => ({
        date: forecastday.date,
        minTemp: forecastday.day.mintemp_c,
        maxTemp: forecastday.day.maxtemp_c,
        avgTemp: forecastday.day.avgtemp_c,
        avgHumidity: forecastday.day.avghumidity,
        willItRain: forecastday.day.daily_will_it_rain,
        condition: {
            text: forecastday.day.condition.text,
            icon: forecastday.day.condition.icon,
        },
    }
)