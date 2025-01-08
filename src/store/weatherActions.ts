import { createAsyncAction } from "typesafe-actions";
import type { IWeatherData } from "../types/weatherTypes";

export const weatherActions = createAsyncAction(
	"weather/REQUEST_WEATHER_DATA",
	"weather/SUCCESS_WEATHER_DATA",
	"weather/ERROR_WEATHER_DATA",
)<string, IWeatherData, string>();
