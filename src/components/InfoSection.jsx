import React from "react";
import BgImage from "../assets/parrallex-img.jpeg";

const InfoSection = () => {
  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center text-white text-center px-4">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${BgImage})` }}
      ></div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-80"></div>

      {/* Content */}
      <div className="relative z-10">
        <div className="mb-20">
          <h1 className="text-4xl font-bold mb-4">High performance</h1>
          <p className="max-w-xl text-lg">
            Our smart algorithms run very fast to provide for you adequate info
            about your giftcard. We value our customers time, that is why you
            can get a fast response on your request
          </p>
        </div>

        <div>
          <h2 className="text-4xl font-bold my-14">Secured and Encrypted</h2>
          <p className="max-w-xl text-lg">
            We at Cardsvalid makes sure customers giftcard details are secured
            and encrypted. No attacker or false identity can intercept your
            verification operations
          </p>
        </div>
        <div>
          <h2 className="text-4xl font-bold my-14">Decentralized</h2>
          <p className="max-w-xl text-lg">
            Our smart frameworks is built on a decentralized platform to ensure
            clients gift card details are not stored anywhere in the server.
            Your card details are immediately deleted after verification
            operations
          </p>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
