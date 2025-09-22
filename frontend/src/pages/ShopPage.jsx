// src/pages/ShopPage.jsx
import React from 'react';
import Navbar from '../components/Navbar';
// import ShopHeader from '../components/ShopHeader';
import Footer from '../components/Footer';
import ShopProductGrid from '../components/shopProductGrid';
import OurProducts from '../components/Ourproduct';
import ShopFeature from '../components/ShopFeature';

const ShopPage = () => {
  return (
    <>
        <Navbar />
      {/* <ShopHeader /> */}
    <ShopProductGrid />
        <OurProducts />
        <ShopFeature />
      {/* More shop sections will be added here */}
      <Footer />
    </>
  );
};

export default ShopPage;