import React from 'react';

// Import your gallery image - using the one you have
import image_101 from '../assets/images/image_101.png';

const ShareYourSetup = () => {
  return (
    <section className="py-16 px-6 lg:px-16 bg-gray-50">
      {/* Section Header */}
      <div className="text-center mb-12">
        <p className="text-gray-600 text-lg mb-2">Share your setup with</p>
        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
          #FuniroFurniture
        </h2>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-4 grid-rows-3 gap-4 h-[600px] lg:h-[800px]">
          {/* Image 1 - Tall left */}
          <div className="col-span-1 row-span-2 group overflow-hidden rounded-lg">
            <img
              src={image_101}
              alt="Modern workspace setup"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
          </div>

          {/* Image 2 - Wide top */}
          <div className="col-span-2 row-span-1 group overflow-hidden rounded-lg">
            <img
              src={image_101}
              alt="Minimalist desk with laptop"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
          </div>

          {/* Image 3 - Small top right */}
          <div className="col-span-1 row-span-1 group overflow-hidden rounded-lg">
            <img
              src={image_101}
              alt="Scandinavian stools"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
          </div>

          {/* Image 4 - Center tall */}
          <div className="col-span-1 row-span-2 group overflow-hidden rounded-lg">
            <img
              src={image_101}
              alt="Contemporary dining room"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
          </div>

          {/* Image 5 - Bottom left */}
          <div className="col-span-1 row-span-1 group overflow-hidden rounded-lg">
            <img
              src={image_101}
              alt="Vintage leather chair"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
          </div>

          {/* Image 6 - Wide bottom center */}
          <div className="col-span-2 row-span-1 group overflow-hidden rounded-lg">
            <img
              src={image_101}
              alt="Modern bedroom setup"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
          </div>

          {/* Image 7 - Right tall */}
          <div className="col-span-1 row-span-2 group overflow-hidden rounded-lg">
            <img
              src={image_101}
              alt="Brick wall dining area"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
          </div>

          {/* Image 8 - Small bottom */}
          <div className="col-span-1 row-span-1 group overflow-hidden rounded-lg">
            <img
              src={image_101}
              alt="Minimalist decor"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
          </div>

          {/* Image 9 - Bottom right */}
          <div className="col-span-1 row-span-1 group overflow-hidden rounded-lg">
            <img
              src={image_101}
              alt="Kitchen interior design"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
          </div>
        </div>
      </div>

      {/* Mobile Grid - Simplified for smaller screens */}
      <div className="block lg:hidden">
        <div className="grid grid-cols-2 gap-4">
          {[1,2,3,4,5,6].map((id) => (
            <div key={id} className="group overflow-hidden rounded-lg h-48">
              <img
                src={image_101}
                alt={`Gallery image ${id}`}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShareYourSetup;