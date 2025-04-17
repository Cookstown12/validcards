import React from "react";
import { Link } from "react-router-dom";

// Footer Component
export const Footer = () => (
  <footer className="bg-gray-900 text-white py-10">
    <div className="max-w-6xl mx-auto px-4 text-center">
      <p className="mb-2">
        &copy; {new Date().getFullYear()} Validscard. All rights reserved.
      </p>
      <div className="space-x-4">
        <Link to="/" className="hover:text-indigo-400">
          Home
        </Link>
        {/* <Link to="/buy" className="hover:text-indigo-400">
          Buy
        </Link> */}
        <Link to="/sell" className="hover:text-indigo-400">
          Validate
        </Link>
        <Link to="/contact" className="hover:text-indigo-400">
          Contact
        </Link>
      </div>
    </div>
  </footer>
);
