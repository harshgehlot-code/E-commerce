import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar_f = () => {
  const navigate = useNavigate();
  return (
    <div>
      {/* {" "} */}
      {/* Removed min-h-screen bg-gray-50 */}
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 lg:px-16 py-6 bg-white shadow-sm">
        <div className="flex items-center space-x-2" >
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            className="text-amber-600"
          >
            <path
              d="M4 28 L16 4 L28 28 L22 28 L16 16 L10 28 Z"
              fill="currentColor"
            />
            <path
              d="M8 28 L16 12 L24 28 L20 28 L16 20 L12 28 Z"
              fill="currentColor"
              opacity="0.7"
            />
          </svg>
          <span className="text-2xl font-bold text-gray-900">Furniro</span>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <Link
            to="/"
            className="text-gray-900 font-medium hover:text-amber-600 transition"
          >
            Home
          </Link>
          <Link
            to="/shop"
            className="text-gray-600 hover:text-amber-600 transition"
          >
            Shop
          </Link>
          <a href="/about" className="text-gray-600 hover:text-amber-600 transition">
            About
          </a>
          <a href="#" className="text-gray-600 hover:text-amber-600 transition">
            Contact
          </a>
        </div>

        <div className="flex items-center space-x-4">
          {/* User Icon */}
          <svg
            className="w-6 h-6 text-gray-600 hover:text-amber-600 cursor-pointer transition"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
          {/* Search Icon */}
          <svg
            className="w-6 h-6 text-gray-600 hover:text-amber-600 cursor-pointer transition"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="m21 21-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          {/* Heart Icon */}
          <svg
            className="w-6 h-6 text-gray-600 hover:text-amber-600 cursor-pointer transition"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
          {/* Shopping Cart Icon */}
          {/* Shopping Cart Icon */}
          <svg
            onClick={() => navigate("/carts")}
            className="w-6 h-6 text-gray-600 hover:text-amber-600 cursor-pointer transition"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.293 
                 2.293c-.63.63-.184 1.707.707 1.707H19M7 13v4a2 2 
                 0 002 2h2m3-6a2 2 0 100 4 2 2 0 000-4zm7 
                 0a2 2 0 100 4 2 2 0 000-4z"
            />
          </svg>
        </div>
      </nav>
    </div>
  );
};

export default Navbar_f;
