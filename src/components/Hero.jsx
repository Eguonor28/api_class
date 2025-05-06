import React from "react";

const Hero = () => {
  return (
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center p-6">
      {/* left side */}
      <div className="max-w-lg">
        <h1 className="text-5xl font-medium lg:text-7xl ">
          Latest Crypto Rates
        </h1>
        <p className="text-gray-200 py-4">
          Get all the latest crypto rates and information on crypto plus app for
          free Lorem ipsum dolor sit amet.
        </p>
        <button className="bg-orange-400 py-3 px-10 hover:bg-orange-600 transition rounded ">
          Get Started
        </button>
      </div>
      {/* right side  */}
      <div className="m-4 max-w-lg">
        <video src="/heroVid.mp4" autoPlay muted loop></video>
      </div>
    </div>
  );
};

export default Hero;
