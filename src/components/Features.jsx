import React from "react";
import { Link } from "react-router-dom";
import OtherCard from "../assets/005.png";
import Amazon from "../assets/amazon.png";
import Apple from "../assets/apple.jpg";
import Ebay from "../assets/ebay.png";
import Vanilla from "../assets/vanilla.png";

// Features Component
export const Features = () => {
  const cards = [
    {
      image: Apple,
      desc: "APPLE GIFT CARD",
      link: "/verify/apple",
    },
    {
      image: Ebay,
      desc: "EBAY GIFT CARD",
      link: "/verify/ebay",
    },
    {
      image: Amazon,
      desc: "AMAZON GIFT CARD",
      link: "/verify/amazon",
    },
    {
      image: Vanilla,
      desc: "VANILLA GIFT CARD",
      link: "/verify/vanilla",
    },
    {
      image: OtherCard,
      desc: "OTHER GIFT CARD",
      link: "/verify/other",
    },
  ];

  return (
    <div>
      <div className="text-center text-lg font-semibold text-indigo-600 p-4">
        WE HAVE VERIFIED OVER 10K GIFTCARDS ON OUR SITE. VERIFY YOURS NOW
      </div>
      <div className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8">
          {cards.map((feat, idx) => (
            <Link
              to={feat.link}
              key={idx}
              className="bg-white p-6 rounded-2xl shadow text-center hover:shadow-lg transition transform hover:scale-105 duration-300"
            >
              <img
                className="w-32 h-32 mx-auto object-contain mb-4"
                src={feat.image}
                alt={feat.desc}
              />
              <h3 className="text-xl font-bold text-indigo-700 mb-2">
                {feat.desc}
              </h3>
              <p className="text-gray-600">Click to verify your card.</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
