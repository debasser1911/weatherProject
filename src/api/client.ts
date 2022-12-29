import axios, { AxiosInstance } from 'axios';
import { apiRoutes } from './routes';

export const axiosInstance: AxiosInstance = axios.create({
  baseURL: apiRoutes.WEATHER_ROUTE,
});
