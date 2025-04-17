import React from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";

// Buy Page
export const Buy = () => (
  <div>
    <Header />
    <section className="pt-28 pb-20 px-6 text-center">
      <h1 className="text-4xl font-bold text-indigo-700 mb-4">
        Buy Gift Cards
      </h1>
      <p className="text-gray-600 max-w-xl mx-auto">
        Choose from a variety of popular gift cards at amazing rates. Fast and
        easy checkout.
      </p>
    </section>
    <Footer />
  </div>
);
