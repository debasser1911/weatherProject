import axios from 'axios';
import { IWeatherData } from '../types/weatherTypes';

const client = axios.create();

export const fetchWeatherData = (location: string): Promise<IWeatherData> => {
  return client
    .get(
      `http://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=b0ce1fbd2b74865c3ef64d68aad23248`
    )
    .then((res) => res.data);
};
