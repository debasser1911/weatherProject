import type { IWeatherData } from "../types/weatherTypes";
import { axiosInstance } from "./client";
import { UNITS, WEATHER_API_TOKEN } from "./constants";

export const fetchWeatherData = async (
	location: string,
): Promise<IWeatherData> => {
	return await axiosInstance
		.get(
			`/data/2.5/weather?q=${location}&units=${UNITS.METRIC}&appid=${WEATHER_API_TOKEN}`,
		)
		.then((res) => res.data);
};
