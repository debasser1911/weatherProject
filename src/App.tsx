import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import WeatherPage from './pages/WeatherPage'
import CountriesPage from './pages/CountriesPage'

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<WeatherPage />}></Route>
          <Route path={'/countries'} element={<CountriesPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
