// src/pages/HomePage.jsx
import React from 'react';
import HeroSection from '../components/HeroSection';
import BrowseTheRange from '../components/BrowseTheRange';
import Ourproduct from '../components/Ourproduct';
import Share from '../components/Share';
import Inspiration from '../components/Inspiration';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const HomePage = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <BrowseTheRange />
      <Ourproduct />
      <Share />
      <Inspiration />
      <Footer />
    </>
  );
};

export default HomePage;