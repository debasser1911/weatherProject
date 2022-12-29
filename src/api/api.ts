import { IWeatherData } from '../types/weatherTypes';
import { axiosInstance } from './client';
import { METRIC_UNITS, WEATER_API_TOKEN } from './constants';

export const fetchWeatherData = (location: string): Promise<IWeatherData> => {
  return axiosInstance
    .get(
      `/data/2.5/weather?q=${location}&units=${METRIC_UNITS.METRIC}&appid=${WEATER_API_TOKEN}`
    )
    .then((res) => res.data);
};
