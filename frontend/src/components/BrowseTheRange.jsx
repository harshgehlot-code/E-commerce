import React from 'react';
import image_106 from '../assets/images/image_106.png';
import image_100 from '../assets/images/image_100.png';
import image_101 from '../assets/images/image_101.png';

const BrowseTheRange = () => {
  return (
    <section className="py-16 px-6 lg:px-16 bg-white">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
          Browse The Range
        </h2>
        <p className="text-gray-600 max-w-md mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      {/* Category Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Dining Category */}
        <div className="group cursor-pointer">
          <div className="relative overflow-hidden rounded-lg mb-6 h-80">
            <img 
              src={image_106}
              alt="Dining"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 text-center">
            Dining
          </h3>
        </div>

        {/* Living Category */}
        <div className="group cursor-pointer">
          <div className="relative overflow-hidden rounded-lg mb-6 h-80">
            <img 
              src={image_100}
              alt="Living"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 text-center">
            Living
          </h3>
        </div>

        {/* Bedroom Category */}
        <div className="group cursor-pointer">
          <div className="relative overflow-hidden rounded-lg mb-6 h-80">
            <img 
              src={image_101}
              alt="Bedroom"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 text-center">
            Bedroom
          </h3>
        </div>
      </div>
    </section>
  );
};
export default BrowseTheRange;
