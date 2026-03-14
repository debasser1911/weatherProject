import type React from 'react';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';

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
