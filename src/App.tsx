import type React from 'react';
import { Route, Routes } from 'react-router-dom';
import WeatherLayout from './components/layout/WeatherLayout';
import CountriesPage from './pages/CountriesPage';
import WeatherPage from './pages/WeatherPage';

const App: React.FC = () => {
  return (
    <WeatherLayout>
      <Routes>
        <Route path={'/'} element={<WeatherPage />} />
        <Route path={'/countries'} element={<CountriesPage />} />
      </Routes>
    </WeatherLayout>
  );
};

export default App;
