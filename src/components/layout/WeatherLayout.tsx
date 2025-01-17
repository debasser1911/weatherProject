import type React from 'react';
import Footer from '../footer/Footer';
import Header from '../header/Header';

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
