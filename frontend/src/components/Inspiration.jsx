import React, { useState, useEffect } from 'react';

// Import your room images - adjust names to match your actual files
import image_106 from '../assets/images/image_106.png';
// import image2 from '../assets/images/rooms/image_107.jpg';
// import image3 from '../assets/images/rooms/image_108.jpg';
// import image4 from '../assets/images/rooms/image_109.jpg';

const RoomsInspiration = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      id: 1,
      number: "01",
      category: "Bed Room",
      title: "Inner Peace",
      image: image_106,
      description: "A serene bedroom with minimalist design and calming colors"
    },
    {
      id: 2,
      number: "02", 
      category: "Living Room",
      title: "Modern Comfort",
      image: image_106,
      description: "Contemporary living space with clean lines and natural light"
    },
    {
      id: 3,
      number: "03",
      category: "Kitchen",
      title: "Culinary Haven",
      image: image_106,
      description: "Functional kitchen design with elegant wooden elements"
    },
    {
      id: 4,
      number: "04",
      category: "Study Room",
      title: "Creative Space",
      image: image_106,
      description: "Inspiring workspace with artistic touches and natural elements"
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="py-16 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="space-y-6">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              50+ Beautiful rooms
              <br />
              inspiration
            </h2>
            <p className="text-gray-600 text-lg max-w-md">
              Our designer already made a lot of beautiful prototype of rooms that inspire you
            </p>
            <button className="bg-[#B88D3E] text-white px-8 py-3 font-semibold hover:bg-[#A67C37] transition-colors duration-300">
              Explore More
            </button>
          </div>

          {/* Right Carousel */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-lg">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {slides.map((slide, index) => (
                  <div key={slide.id} className="w-full flex-shrink-0 relative">
                    <div className="aspect-[4/3] relative">
                      <img
                        src={slide.image}
                        alt={slide.title}
                        className="w-full h-full object-cover"
                      />
                      
                      {/* Slide Content Overlay */}
                      <div className="absolute bottom-6 left-6 right-6">
                        <div className="bg-white bg-opacity-90 backdrop-blur-sm p-6 rounded-lg">
                          <div className="flex items-center gap-4">
                            <div className="text-gray-600">
                              <span className="text-2xl font-bold">{slide.number}</span>
                              <span className="mx-2">——</span>
                              <span className="text-sm uppercase tracking-wide">{slide.category}</span>
                            </div>
                          </div>
                          <h3 className="text-2xl font-bold text-gray-900 mt-2 mb-3">
                            {slide.title}
                          </h3>
                          
                          {/* Next Arrow */}
                          <button 
                            onClick={nextSlide}
                            className="bg-[#B88D3E] text-white p-3 rounded-sm hover:bg-[#A67C37] transition-colors duration-300"
                          >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center space-x-2 mt-6">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    index === currentSlide 
                      ? 'bg-[#B88D3E]' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 p-2 rounded-full shadow-lg transition-all duration-300"
            >
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 p-2 rounded-full shadow-lg transition-all duration-300"
            >
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoomsInspiration;