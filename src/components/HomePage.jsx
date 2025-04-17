import React from "react";
import TheImage from "../assets/005.png";
import Features from "./Features";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Hero } from "./Hero";
import InfoSection from "./InfoSection";

// Home Page
export const HomePage = () => (
  <div className="flex flex-col min-h-screen">
    <Header />
    <div className="">
      <img className="mx-auto pt-14" src={TheImage} alt="okay" />
    </div>
    <Hero />

    {/* Auto-playing Video */}
    <div className="w-full bg-black flex justify-center py-6 px-4">
      <video
        className="w-full max-w-4xl rounded-2xl shadow-lg"
        src="https://cardsvalid.com/wp-content/uploads/2023/12/try-now.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
    </div>

    {/* Features Section */}
    <Features />
    <div className="mx-4 md:mx-auto pb-4">
      <h2 className="text-3xl font-bold my-14">Our Services</h2>
      <p className="max-w-xl text-lg">
        Leverage our agile and efficient frameworks to provide a robust
        verification and synopsis for high level reviews on your gift card
      </p>
    </div>
    <InfoSection />

    {/* Footer */}
    <Footer />
  </div>
);
