import React from 'react'
import { Route } from 'react-router-dom'
import WeatherPage from './pages/WeatherPage'
import CountriesPage from './pages/CountriesPage'

const App: React.FC = () => {
  return (
    <>
      <Route path={'/'} element={<WeatherPage />}></Route>
      <Route path={'/countries'} element={<CountriesPage />}></Route>
    </>
  )
}

export default App
