import { UNITS, WEATHER_API_TOKEN } from './constants';

export const fetchWeatherData = (city: string) => fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=${UNITS.METRIC}&appid=${WEATHER_API_TOKEN}`,
  )
    .then((res) => res.json())
    .catch((error) => console.error(error));
