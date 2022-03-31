import { combineReducers } from 'redux';
import { createReducer } from 'typesafe-actions';
import { IWeatherData } from '../types/weatherTypes';
import { RootAction } from './rootAction';
import { weatherActions } from './weatherActions';

export interface WeatherState {
  weatherData: IWeatherData;
  loading: boolean;
  error: string;
}

const initialState: WeatherState = {
  weatherData: {
    name: '',
    sys: {
      sunrise: 1,
      sunset: 1,
    },
  },
  loading: false,
  error: '',
};
export const weatherReducer = combineReducers({
  weatherData: createReducer<IWeatherData, RootAction>(
    initialState.weatherData
  ).handleAction(weatherActions.success, (state, { payload }) => payload),
  loading: createReducer(initialState.loading),
  error: createReducer(initialState.error),
});

// export default combineReducers<WeatherState>({
//   weatherData: weatherReducer,
// });
