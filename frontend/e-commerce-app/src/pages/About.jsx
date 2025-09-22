import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import BillingDetails from '../components/BilingDetails';
import ShopHeader from '../components/ShopHeader';
import ShopFeatures from '../components/ShopFeature';

const HomePage = () => {
  return (
    <>
      <Navbar />
        <ShopHeader />
        <BillingDetails />
        <ShopFeatures />
      <Footer />
    </>
  );
};

export default HomePage;