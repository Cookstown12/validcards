import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

// Contact Page
export const Contact = () => (
  <div>
    <Header />
    <section className="pt-28 pb-20 px-6 text-center">
      <h1 className="text-4xl font-bold text-indigo-700 mb-4">Contact Us</h1>
      <p className="text-gray-600 max-w-xl mx-auto">
        Have questions? Reach out and we'll get back to you shortly.
      </p>
    </section>
    <Footer />
  </div>
);
