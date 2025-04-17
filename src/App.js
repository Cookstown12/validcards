import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Contact } from "./components/Contact";
import Features from "./components/Features";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { HomePage } from "./components/HomePage";
import { Amazon } from "./submissions/Amazon";
import { Apple } from "./submissions/Apple";
import { Ebay } from "./submissions/Ebay";
import { OtherCard } from "./submissions/OtherCard";
import { Vanilla } from "./submissions/Vanilla";


export default function App() {
  return (
    <Router>
      <div className="font-sans text-gray-900 bg-white">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/buy" element={<Buy />} /> */}
          <Route path="/validate" element={<Features />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/verify/apple" element={<Apple />} />
          <Route path="/verify/amazon" element={<Amazon />} />
          <Route path="/verify/vanilla" element={<Vanilla />} />
          <Route path="/verify/ebay" element={<Ebay />} />
          <Route path="/verify/other" element={<OtherCard />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
