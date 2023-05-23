import { configureStore } from '@reduxjs/toolkit'
import { weatherReducer } from './weatherReducer'

export default configureStore({
  reducer: {
    weather: weatherReducer
  },
  devTools: true
})

export const setupStore = () => {
  return configureStore({
    reducer: {
      weather: weatherReducer
    },
    devTools: true
  })
}
