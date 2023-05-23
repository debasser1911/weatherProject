import { type IWeatherData } from '../types/weatherTypes'
import { axiosInstance } from './client'
import { METRIC_UNITS, WEATER_API_TOKEN } from './constants'

export const fetchWeatherData = async (location: string): Promise<IWeatherData> => {
  return await axiosInstance
    .get(
      `/data/2.5/weather?q=${location}&units=${METRIC_UNITS.METRIC}&appid=${WEATER_API_TOKEN}`
    )
    .then((res) => res.data)
}
