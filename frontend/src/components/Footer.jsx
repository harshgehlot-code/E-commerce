import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-12 px-6 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-gray-900">Funiro.</h3>
            <div className="space-y-2 text-gray-600">
              <p>400 University Drive Suite 200 Coral</p>
              <p>Gables,</p>
              <p>FL 33134 USA</p>
            </div>
          </div>

          {/* Links Column */}
          <div className="space-y-4">
            <h4 className="text-gray-500 font-medium">Links</h4>
            <div className="space-y-3">
              <a href="#" className="block text-gray-900 hover:text-[#B88D3E] transition-colors">
                Home
              </a>
              <a href="#" className="block text-gray-900 hover:text-[#B88D3E] transition-colors">
                Shop
              </a>
              <a href="#" className="block text-gray-900 hover:text-[#B88D3E] transition-colors">
                About
              </a>
              <a href="#" className="block text-gray-900 hover:text-[#B88D3E] transition-colors">
                Contact
              </a>
            </div>
          </div>

          {/* Help Column */}
          <div className="space-y-4">
            <h4 className="text-gray-500 font-medium">Help</h4>
            <div className="space-y-3">
              <a href="#" className="block text-gray-900 hover:text-[#B88D3E] transition-colors">
                Payment Options
              </a>
              <a href="#" className="block text-gray-900 hover:text-[#B88D3E] transition-colors">
                Returns
              </a>
              <a href="#" className="block text-gray-900 hover:text-[#B88D3E] transition-colors">
                Privacy Policies
              </a>
            </div>
          </div>

          {/* Newsletter Column */}
          <div className="space-y-4">
            <h4 className="text-gray-500 font-medium">Newsletter</h4>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter Your Email Address"
                className="flex-1 px-0 py-2 border-0 border-b border-gray-300 focus:border-gray-900 focus:outline-none focus:ring-0 text-gray-600 placeholder-gray-400"
              />
              <button className="ml-4 px-0 py-2 border-0 border-b border-gray-900 font-medium text-gray-900 hover:text-[#B88D3E] transition-colors">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-8 border-t border-gray-200">
          <p className="text-gray-900 text-left">
            2023 furino. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;