import type React from 'react';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

type WeatherLayoutProps = {
  children: React.ReactNode;
};

const WeatherLayout = ({ children }: WeatherLayoutProps) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default WeatherLayout;
