import React from 'react'
import { Route, Routes } from 'react-router-dom'
import WeatherPage from './pages/WeatherPage'
import CountriesPage from './pages/CountriesPage'

const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path={'/'} element={<WeatherPage />}></Route>
        <Route path={'/countries'} element={<CountriesPage />}></Route>
      </Routes>
    </>
  )
}

export default App
