
import React from 'react';
import hero from '../assets/images/hero.png';

const FurniroHero = () => {
  return (
    <div className="min-h-screen bg-gray-50"> 
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center justify-center bg-gray-100">
        {/* Background Image - Your hero.png */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${hero})`
          }}
        />

        {/* Content Box */}
        <div className="relative z-10 bg-[#FDF2E9] p-8 lg:p-12 rounded-lg max-w-md lg:max-w-lg mx-4 lg:mr-16 lg:ml-auto shadow-lg">
          <p className="text-sm font-semibold text-gray-700 mb-3 tracking-wide uppercase">
            New Arrival
          </p>
          <h1 className="text-3xl lg:text-4xl font-bold text-[#B88D3E] mb-6 leading-tight">
            Discover Our
            <br />
            New Collection
          </h1>
          <p className="text-gray-700 mb-8 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut 
            elit tellus, luctus nec ullamcorper mattis.
          </p>
          <button className="bg-[#B88D3E] text-white px-8 py-4 font-semibold text-sm uppercase tracking-wide hover:bg-[#A67C37] transition-colors duration-300 transform hover:scale-105">
            BUY NOW
          </button>
        </div>

        
      </section>
    </div>
  );
};

export default FurniroHero;