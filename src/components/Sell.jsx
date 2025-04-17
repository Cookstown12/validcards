import React from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";

// Sell Page
export const Sell = () => (
  <div>
    <Header />
    <section className="pt-28 pb-20 px-6 text-center">
      <h1 className="text-4xl font-bold text-indigo-700 mb-4">
        Validate Gift Cards
      </h1>
      <p className="text-gray-600 max-w-xl mx-auto">Validate your gift card</p>
    </section>
    <Footer />
  </div>
);
