import React from "react";
import { Link } from "react-router-dom";

// Hero Component
export const Hero = () => (
  <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-28 px-6 text-center mt-16">
    <h1 className="text-5xl font-extrabold mb-4">
      Validate your Gift Cards Instantly
    </h1>
    <p className="text-lg max-w-xl mx-auto mb-6">
      We validate all gift cards. Instant validation and 24/7 support
      guaranteed.
    </p>
    <Link
      to="/validate"
      className="inline-block bg-white text-indigo-600 px-6 py-3 rounded-full font-semibold shadow hover:bg-gray-100"
    >
      Get Started
    </Link>
  </section>
);
