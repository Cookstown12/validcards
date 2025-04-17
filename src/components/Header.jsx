import React from "react";
import { Link } from "react-router-dom";

// Header Component
export const Header = () => (
  <header className="bg-white shadow fixed top-0 w-full z-50">
    <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold text-indigo-700">
        Validscard
      </Link>
      <nav className="space-x-6 text-gray-800">
        {/* <Link to="/buy" className="hover:text-indigo-600">
          Buy
        </Link> */}
        <Link to="/validate" className="hover:text-indigo-600">
          Validate
        </Link>
        <Link to="/contact" className="hover:text-indigo-600">
          Contact
        </Link>
      </nav>
    </div>
  </header>
);
