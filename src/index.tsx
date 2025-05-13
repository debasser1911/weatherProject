import type React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import WeatherPage from './pages/WeatherPage';
import CountriesPage from './pages/CountriesPage';
import './index.css';
import WeatherLayout from './Layout';

const container = document.getElementById('root');
if (!container) {
  throw new Error('Failed to find the app container');
}
const root = createRoot(container);

const queryClient = new QueryClient()

export const App: React.FC = () => {
  return (
    <WeatherLayout>
      <Routes>
        <Route path={'/'} element={<WeatherPage />} />
        <Route path={'/countries'} element={<CountriesPage />} />
      </Routes>
    </WeatherLayout>
  );
};

root.render(
    <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
    </BrowserRouter>
);
