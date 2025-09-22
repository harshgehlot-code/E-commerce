// import { useState } from 'react'
// import './App.css'
// import HeroSection from './components/HeroSection'
// import BrowseTheRange from './components/BrowseTheRange'
// import OurProducts from './components/Ourproduct'
// import Inspiration from './components/Inspiration'
// import Share from './components/share'
// import Footer from './components/Footer'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div className="App">
//         <HeroSection />
//         <BrowseTheRange />
//         <OurProducts />
//         <Inspiration />
//         <Share />
//         <Footer />
//       </div>
//     </>
//   )
// }

// export default App

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import ErrorBoundary from './components/ErrorBoundary';
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import CardPage from "./pages/CartPage";
import About from "./pages/About";
import { useNavigate } from "react-router-dom";

function App() {
  return (
    // <ErrorBoundary>
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/carts" element={<CardPage />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/Checkout" element={<CartPage/>} */}
          {/* /> */}
        </Routes>
      </div>
    </Router>
    // </ErrorBoundary>
  );
}

export default App;
