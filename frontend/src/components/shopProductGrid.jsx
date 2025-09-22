import React, { useState } from 'react';

const ShopHeader = () => {
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'
  const [showCount, setShowCount] = useState('16');
  const [sortBy, setSortBy] = useState('Default');

  return (
    <div>
      {/* Hero Header Section */}
      <section className="relative h-80 flex items-center justify-center">
        {/* Background Image - Replace with your shop background */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/images/cup.png')` // Add your shop background image here
          }}
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-white bg-opacity-50"></div>
        
        {/* Content */}
        <div className="relative z-10 text-center">
          <h1 className="text-5xl font-medium text-gray-900 mb-4">Shop</h1>
          
          {/* Breadcrumb */}
          <div className="flex items-center justify-center space-x-2 text-gray-600">
            <span className="font-medium text-gray-900">Home</span>
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
            <span>Shop</span>
          </div>
        </div>
      </section>

      {/* Filter and Sort Controls */}
      <section className="bg-[#F9F1E7] py-4 px-6 lg:px-16">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Left Side - Filter and View Options */}
          <div className="flex items-center space-x-6">
            {/* Filter Button */}
            <button className="flex items-center space-x-2 text-gray-900 hover:text-[#B88D3E] transition">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.707A1 1 0 013 7V4z" />
              </svg>
              <span>Filter</span>
            </button>

            {/* View Mode Buttons */}
            <div className="flex items-center space-x-2">
              <button 
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded ${viewMode === 'grid' ? 'bg-gray-200' : 'hover:bg-gray-100'}`}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
              </button>
              
              <button 
                onClick={() => setViewMode('list')}
                className={`p-2 rounded ${viewMode === 'list' ? 'bg-gray-200' : 'hover:bg-gray-100'}`}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
              </button>
            </div>

            {/* Results Count */}
            <span className="text-gray-600 border-l border-gray-300 pl-6">
              Showing 1–16 of 32 results
            </span>
          </div>

          {/* Right Side - Show and Sort Options */}
          <div className="flex items-center space-x-6">
            {/* Show Count */}
            <div className="flex items-center space-x-2">
              <span className="text-gray-900">Show</span>
              <select 
                value={showCount}
                onChange={(e) => setShowCount(e.target.value)}
                className="bg-white border border-gray-300 rounded px-3 py-1 text-gray-600 focus:outline-none focus:border-[#B88D3E]"
              >
                <option value="16">16</option>
                <option value="32">32</option>
                <option value="48">48</option>
              </select>
            </div>

            {/* Sort By */}
            <div className="flex items-center space-x-2">
              <span className="text-gray-900">Short by</span>
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-white border border-gray-300 rounded px-3 py-1 text-gray-600 focus:outline-none focus:border-[#B88D3E]"
              >
                <option value="Default">Default</option>
                <option value="Price: Low to High">Price: Low to High</option>
                <option value="Price: High to Low">Price: High to Low</option>
                <option value="Name: A to Z">Name: A to Z</option>
                <option value="Name: Z to A">Name: Z to A</option>
              </select>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ShopHeader;